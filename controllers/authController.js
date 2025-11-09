import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const generateToken = (userId) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};
export const registerUser = async (req, res) => {};

export const loginUser = async (req, res) => {};

export const getUserProfile = async (req, res) => {};

export const updateUserProfile = async (req, res) => {};
