const path = require('path');
const fs = require('fs-extra').promises;
const uuid = require('uuid').v1;

const { emailActionsEnum } = require('../constant');
const { emailService, userService } = require('../service');
const { passwordHasher } = require('../helpers');

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      // { age: 22 }
      const users = await userService.findUsers(req.query);

      res.json(users);
    } catch (e) {
      res.status(418).json(e.message);
    }
  },

  getSingleUser: async (req, res) => {
    try {
      const { userId } = req.params;

      const user = await userService.findUserById(userId);

      console.log('_______________________________-');
      console.log(user);
      console.log('_______________________________-');

      res.json(user);
    } catch (e) {
      res.json(e.message);
    }
  },

  createUser: async (req, res) => {
    try {
      const { body: { password, email }, avatar } = req;

      const hasPassword = await passwordHasher.hash(password);

      const user = await userService.createUser({ ...req.body, password: hasPassword });

      if (avatar) {
        // const pathWithoutStatic = path.join('user', `${user._id}`, 'photos');
        // const photoDir = path.join(process.cwd(), 'static', pathWithoutStatic);
        // const fileExtension = avatar.name.split('.').pop();
        // const photoName = `${uuid()}.${fileExtension}`;
        // const finalPhotoPath = path.join(photoDir, photoName);
        //
        // console.log('***************************************8');
        // console.log(finalPhotoPath);
        // console.log('***************************************8');

        const { uploadPath, finalPhotoPath, photoDir } = _photoDirBuilder(avatar.name, 'photos', user._id);

        await fs.mkdir(photoDir, { recursive: true });
        await avatar.mv(finalPhotoPath);

        await userService.updateUserById(user._id, { avatar: uploadPath });
      }

      // if (req.videos) {
      //   for (const video of req.videos) {
      //     const { uploadPath, finalPhotoPath, photoDir } = _photoDirBuilder(video.name, 'videos', user._id);
      //
      //     await fs.mkdir(photoDir, { recursive: true });
      //     await avatar.mv(finalPhotoPath);
      //
      //     await userService.updateUserById(user._id, { video: uploadPath });
      //   }
      // }

      await emailService.sendMail(email, emailActionsEnum.WELCOME, { userName: email });

      res.status(201).json('USERS IS CREATED');
    } catch (e) {
      res.json(e.message);
    }
  },

  deleteUser: (req, res) => {
    try {
      const { userId } = req.params;

      if (userId !== req.user.id) {
        throw new Error('Unauthorized');
      }

      console.log('---------------------------------------------------');
      console.log(req.user);
      console.log('---------------------------------------------------');

      res.json(`${userId} is deleted`);
    } catch (e) {
      res.json(e.message);
    }
  },

};

function _photoDirBuilder(docName, itemType, itemId) {
  const pathWithoutStatic = path.join('user', `${itemId}`, itemType);
  const photoDir = path.join(process.cwd(), 'static', pathWithoutStatic);
  const fileExtension = docName.split('.').pop();
  const photoName = `${uuid()}.${fileExtension}`;
  const finalPhotoPath = path.join(photoDir, photoName);

  console.log('***************************************8');
  console.log(finalPhotoPath);
  console.log('***************************************8');

  const uploadPath = path.join(pathWithoutStatic, photoName);

  return { finalPhotoPath, uploadPath, photoDir };
}
