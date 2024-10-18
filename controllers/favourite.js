const prismaClient = require("../prismaClient");
const { catchAsync, sendResponse } = require("../utils/helper");

const getUserFavourites = catchAsync(async (req, res) => {
  const { id } = req.params;

  const [count, docs] = await prismaClient.$transaction([
    prismaClient.favourite.count({
      where: {
        userId: +id,
      },
    }),
    prismaClient.favourite.findMany({
      where: {
        userId: +id,
      },
      select: {
        userId: false,
        post: true,
      },
    }),
  ]);

  sendResponse(res, {
    count,
    docs,
  });
});

const addToFavourite = catchAsync(async (req, res) => {
  const { userId, postId } = req.body;

  const [favourite, _] = await prismaClient.$transaction([
    prismaClient.favourite.create({
      data: {
        postId,
        userId,
      },
    }),
    prismaClient.post.update({
      where: {
        id: postId,
      },
      data: {
        favouriteCount: {
          increment: 1,
        },
      },
    }),
  ]);

  sendResponse(res, favourite);
});

const removeFavourite = catchAsync(async (req, res) => {
  const { userId, postId } = req.body;

  const favourite = await prismaClient.favourite.delete({
    where: {
      userId,
      postId,
    },
  });

  sendResponse(res, favourite);
});

const getAllFavourites = catchAsync(async (req, res) => {
  const favourite = await prismaClient.favourite.findMany();

  sendResponse(res, favourite);
});

module.exports = {
  getUserFavourites,
  addToFavourite,
  removeFavourite,
  getAllFavourites,
};
