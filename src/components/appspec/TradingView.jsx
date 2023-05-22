// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('analytics-platform-chart-demo') && 'TradingView' in window) {
          new window.TradingView.widget({
            container_id: "analytics-platform-chart-demo",
            width: "100%",
            height: "100%",
            autosize: true,
            symbol: "NASDAQ:AAPL",
            interval: "D",
            timezone: "exchange",
            theme: "light",
            style: "0",
            toolbar_bg: "#f1f3f6",
            withdateranges: true,
            allow_symbol_change: true,
            save_image: false,
            details: true,
            hotlist: true,
            calendar: true,
            locale: "en"
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container'>
      <div id='analytics-platform-chart-demo' />
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a>
      </div>
    </div>
  );
}
