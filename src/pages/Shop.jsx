import { useEffect, useState } from "react";

import { Container, Row, Col } from "reactstrap";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
// import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";
import useGetDate from "../hooks/useGetDate";

import "../styles/shop.css";

const ShopPage = () => {
  const { data: products, loading } = useGetDate("products");
  const [productsData, setProductsData] = useState(products);

  useEffect(() => {
    setProductsData(products);
  }, [products]);

  const handleFilter = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (product) => product.category === "sofa"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (product) => product.category === "mobile"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (product) => product.category === "chair"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "watch") {
      const filteredProducts = products.filter(
        (product) => product.category === "watch"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "wireless") {
      const filteredProducts = products.filter(
        (product) => product.category === "wireless"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter((product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchedProducts);
  };

  if (loading) {
    return <h1 className="fw-bold py-5 text-center">Loading...</h1>;
  }

  return (
    <Helmet title="Shop">
      <CommonSection title={"Products"} />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>

            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select>
                  <option>Sort By </option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>

            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search...."
                  onChange={handleSearch}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No Products are found!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ShopPage;
