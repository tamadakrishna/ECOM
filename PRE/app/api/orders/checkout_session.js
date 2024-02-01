import {createRouter} from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import onError from "@/backend/middlewares/errors";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";
import { checkoutSession } from "@/backend/controllers/orderControllers";

const router = createRouter({onError});

dbConnect();

router.use(isAuthenticatedUser).post(checkoutSession);

export default router.handler();