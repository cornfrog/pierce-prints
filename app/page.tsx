import CategoryList from "./components/CategoryList";

export default function Home() {
  return (
    <>
      <div className="welcome-banner">
        <h1 className="welcome-banner__title">Welcome!</h1>
        <p className="welcome-banner__text">If you can think it. We can print it!</p>
        <p className="welcome-banner__mission">
          Welcome to Pierce Prints! My mission is to provide top-quality
          3D printed products to communities far and wide. Whether it&apos;s a
          unique desk ornament, a key piece for your cosplay ensemble, or
          anything else you can imagine, I&apos;m here to bring your ideas to
          life. Can&apos;t find exactly what you&apos;re looking for? No problem!
          Just drop me a message via our contact page, and I&apos;ll work to
          fulfill your needs. Thank you for visiting my store – I hope you enjoy
          exploring my collection!
        </p>
      </div>
      <div className="separator-container">
        <div className="separator-container__bar"></div>
        <h1 className="separator-container__text">Categories</h1>        
        <div className="separator-container__bar"></div>
      </div>
      <CategoryList />
    </> 
  );
}
