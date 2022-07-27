import Footer from "./component/footer";
import Image from "next/image";
import Navbar from "./component/navbar";
export default function Bot() {
  return (
    <div className="">
      <Navbar />
      <div className="pt-32 mx-24">
        <p className="text-3xl">Grid Trading Bot</p>
        <p className="text-xl pt-8 ml-10">What is Grid Trading Bot</p>
        <p className=" ml-10 pt-5">
          Grid trading bot is a trading program in which users can automatically
          buy low and sell high in a specific price range through the program.
          In the volatile digital asset market, the use of grid trading bots can
          avoid erroneous trading decisions caused by human factors to a greater
          extent. The grid trading bots will assist you in strictly implementing
          your own setting of low-buy-high-sell trading strategies.
        </p>
        <div className="flex justify-center pt-10">
          <Image
            src="/Screen Shot 2565-07-26 at 14.09.06.png"
            width={700}
            height={400}
          />
        </div>
        <p className="text-3xl">The risks of Grid Trading Bot</p>
        <p className="text-xl pt-8 ml-10">
          1. If the price falls below the lower limit price of the interval, the
          order will not continue. When the price returns above the lower limit
          price of the interval, the order will continue. If the user sets the
          stop price, and the stop price is triggered. The grid strategy will be
          terminated.
          <br />
          2. If the price exceeds the highest price of the interval, the order
          will not continue. When the price falls below the highest price of the
          interval, the order will continue. If the user sets the take profit
          price, and the take profit price is triggered. The grid strategy will
          be terminated. However, due to strategic reasons, you will miss the
          trading opportunities in this rising market of not having any
          positions.
          <br />
          3.The use of funds is not efficient, because the grid strategy will
          place orders based on the price range and the number of grids set by
          the user. If the user sets the number of grids too small, and the
          price fluctuates at the two points (which two points are far away from
          each others) set by the user, the system will not automatically place
          orders.
          <br />
          4.During the operation of the grid strategy, if the currency
          encounters unpredictable circumstances such as suspension or delisting
          of the currency, the grid strategy will be automatically suspended.
        </p>
      </div>

      <Footer />
    </div>
  );
}
