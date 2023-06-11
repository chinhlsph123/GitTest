import React, { useEffect } from "react";
import ccxt from "ccxt";

const TradeLog = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const exchange = new ccxt.binance();
        const symbol = "BTC/USDT";
        const timeframe = "1m";
        const limit = 10; // Số lượng kết quả OHLCV cần lấy
        const ohlcvData = await exchange.fetchOHLCV("BTC/USDT", timeframe, undefined, limit);

        console.log(ohlcvData);
        // Xử lý dữ liệu OHLCV tại đây

      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu OHLCV:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Hiển thị dữ liệu OHLCV */}
    </div>
  );
};

export default TradeLog;