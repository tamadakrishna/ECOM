import {createRouter} from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { updateProfile } from "@/backend/controllers/authControllers";
import onError from "@/backend/middlewares/errors";
import upload from "@/backend/utils/multer";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";

const router = createRouter({onError});

dbConnect();

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadMiddleware = upload.array("image");

router.use(isAuthenticatedUser, uploadMiddleware);
router.put(updateProfile);

export default router.handler();