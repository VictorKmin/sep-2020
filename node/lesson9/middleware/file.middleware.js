const {
  DOCS_MIMETYPES,
  FILE_MAX_SIZE,
  PHOTO_MAX_SIZE,
  PHOTOS_MIMETYPES,
  VIDEOS_MIMETYPES,
  VIDEO_MAX_SIZE
} = require('../constant/constants');

module.exports = {
  checkFile: (req, res, next) => {
    try {
      const { files } = req;

      console.log('______________________________');
      console.log(files);
      console.log('______________________________');

      const docs = [];
      const photos = [];
      const videos = [];

      const allFiles = Object.values(files);

      for (let i = 0; i < allFiles.length; i++) {
        const { name, size, mimetype } = allFiles[i];

        if (PHOTOS_MIMETYPES.includes(mimetype)) { // PHOTO
          if (PHOTO_MAX_SIZE < size) {
            throw new Error(`file ${name} is too big`);
          }

          photos.push(allFiles[i]);
        } else if (DOCS_MIMETYPES.includes(mimetype)) { // doc
          if (FILE_MAX_SIZE < size) {
            throw new Error(`file ${name} is too big`);
          }

          docs.push(allFiles[i]);
        } else if (VIDEOS_MIMETYPES.includes(mimetype)) { // video
          if (VIDEO_MAX_SIZE < size) {
            throw new Error(`file ${name} is too big`);
          }

          videos.push(allFiles[i]);
        } else {
          throw new Error('Not valid file');
        }
      }

      req.docs = docs;
      req.photos = photos;
      req.videos = videos;

      next();
    } catch (e) {
      next(e);
    }
  },

  checkAvatar: (req, res, next) => {
    try {
      if (req.photos.length > 1) {
        throw new Error('You can upload just one photo');
      }

      [req.avatar] = req.photos;
      // req.avatar = req.photos[0];

      next();
    } catch (e) {
      next(e);
    }
  }
};
