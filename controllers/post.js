const prismaClient = require("../prismaClient");
const { catchAsync, sendResponse } = require("../utils/helper");

const getAllPosts = catchAsync(async (req, res) => {
  const posts = await prismaClient.post.findMany({ orderBy: { id: "asc" } });

  sendResponse(res, posts);
});

const getSinglePost = catchAsync(async (req, res) => {
  const { id } = req.params;

  const posts = await prismaClient.post.findFirst({
    where: {
      id: +id,
    },
    include: {
      author: true,
    },
  });

  sendResponse(res, posts);
});

const createPost = catchAsync(async (req, res) => {
  const { title, userId, averageRating } = req.body;

  const post = await prismaClient.post.create({
    data: {
      title,
      userId,
      averageRating,
    },
  });

  sendResponse(res, post);
});

const updatePost = catchAsync(async (req, res) => {
  const { id } = req.params;

  const { title, averageRating } = req.body;

  const post = await prismaClient.post.update({
    where: {
      id: +id,
    },
    data: {
      title,
      averageRating,
    },
  });

  sendResponse(res, post);
});

const deletePost = catchAsync(async (req, res) => {
  const { id } = req.params;

  const post = await prismaClient.post.delete({
    where: {
      id: +id,
    },
  });

  console.log({ post });

  sendResponse(res, post);
});

module.exports = {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
};
