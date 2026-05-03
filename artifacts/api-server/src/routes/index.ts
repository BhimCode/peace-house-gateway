import { Router, type IRouter } from "express";
import healthRouter from "./health";
import bookingRouter from "./booking";
import chatbotRouter from "./chatbot";

const router: IRouter = Router();

router.use(healthRouter);
router.use(bookingRouter);
router.use(chatbotRouter);

export default router;
