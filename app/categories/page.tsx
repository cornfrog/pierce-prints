import CategoryList from "../components/CategoryList";

export default function Categories() {
  return (
    <>
      <div className="separator-container">
        <div className="separator-container__bar"></div>
        <h1 className="separator-container__text">Categories</h1>
        <div className="separator-container__bar"></div>
      </div>
      <CategoryList />
    </>
  );
}
