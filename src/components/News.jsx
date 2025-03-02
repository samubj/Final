const News = () => {
  const newsArticles = [
    {
      title: "Bitcoin Hits New All-Time High",
      content: "Bitcoin has reached an all-time high, surpassing $80,000 per coin. Institutional investors are driving the surge.",
      date: "March 1, 2025"
    },
    {
      title: "Ethereum 2.0 Upgrade Announced",
      content: "Ethereum's developers have confirmed the long-awaited launch of Ethereum 2.0, introducing Proof of Stake.",
      date: "February 25, 2025"
    },
    {
      title: "New Altcoins Gaining Momentum",
      content: "Several new altcoins, including Solana-based projects, are experiencing significant growth.",
      date: "February 18, 2025"
    },
    {
      title: "US Government Proposes Crypto Regulations",
      content: "The US Senate has proposed a new bill to regulate cryptocurrency transactions and increase transparency.",
      date: "February 15, 2025"
    },
    {
      title: "Tesla Resumes Bitcoin Payments",
      content: "Elon Musk confirms that Tesla will once again accept Bitcoin as payment for its electric vehicles.",
      date: "February 10, 2025"
    },
    {
      title: "Binance Launches New DeFi Platform",
      content: "Binance has introduced a new decentralized finance (DeFi) platform to improve staking and liquidity pools.",
      date: "February 5, 2025"
    },
    {
      title: "Crypto Adoption in Latin America",
      content: "More Latin American countries are embracing Bitcoin as legal tender to combat inflation.",
      date: "January 30, 2025"
    },
    {
      title: "Hackers Steal $100M from Crypto Exchange",
      content: "A major crypto exchange suffered a security breach, losing $100 million in digital assets.",
      date: "January 25, 2025"
    }
  ];

  return (
    <div className="crypto-news-container">
      <h1>Latest Crypto News</h1>
      {newsArticles.map((news, index) => (
        <div key={index} className="crypto-news-item">
          <h2>{news.title}</h2>
          <p>{news.content}</p>
          <span className="date">Published on: {news.date}</span>
        </div>
      ))}
    </div>
  );
};

export default News;
