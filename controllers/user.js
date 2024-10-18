const { catchAsync, sendResponse } = require("../utils/helper");
const prismaClient = require("../prismaClient/index");

const getAllUsers = catchAsync(async (req, res) => {
  const users = await prismaClient.user.findMany({
    orderBy: {
      id: "asc",
    },
  });

  sendResponse(res, users);
});

const createUser = catchAsync(async (req, res) => {
  const { email, name } = req.body;

  const user = await prismaClient.user.create({
    data: {
      email,
      name,
    },
  });

  sendResponse(res, user);
});

const updateUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { email, name } = req.body;

  const user = await prismaClient.user.update({
    where: {
      id: +id,
    },
    data: {
      email,
      name,
    },
  });

  sendResponse(res, user);
});

const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params;

  const user = await prismaClient.user.delete({
    where: {
      id: +id,
    },
  });

  sendResponse(res, user);
});

const getYourProfile = catchAsync(async (req, res) => {
  const { id } = req.params;

  const user = await prismaClient.user.findFirst({
    where: {
      id: +id,
    },
    include: {
      Post: true,
      favourite: {
        include: {
          post: true,
        },
      },
    },
  });

  sendResponse(res, user);
});

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getYourProfile,
};
