import { validate } from "email-validator";
import { prisma } from "../config/prisma.js";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({ success: false, message: "Credentials are missing" });
  }

  if (!validate(email)) {
    return res.json({ success: false, message: "Wrong Email-id" });
  }

  if (password.length < 8) {
    return res.json({
      success: false,
      message: "Password must be at least 8 characters",
    });
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return res.json({ success: false, message: "Email Id already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return res.json({ success: true, user });
};

export { registerUser };
