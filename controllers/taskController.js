import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const {
      title,
      description,
      priority,
      dueDate,
      assignedTo,
      attachments,
      todoChecklist,
    } = req.body;
    if (!Array.isArray(assignedTo)) {
      return res
        .status(400)
        .json({ message: "AssignedTo must be an array of user IDs" });
    }
    const task = await Task.create({
      title,
      description,
      priority,
      dueDate,
      assignedTo,
      createdBy: req.user._id,
      attachments,
      todoChecklist,
    });
    res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const updateTaskStatus = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const updateTaskChecklist = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getDashboardData = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getUserDashboardData = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
