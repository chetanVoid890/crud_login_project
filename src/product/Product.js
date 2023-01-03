import "./product.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material/";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GetProduct from "../redux/slice/product/ProductAction";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";
import ProductView from "./ProductView";

// ---------------------------------------

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Product = () => {
  const [isViewModal, setIsViewModal] = useState(false);

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(GetProduct());
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

  // ---------------------------------------------
  const handleViewModal = (obj) => {
    setIsViewModal(true);
    setData(obj);
  };

  const handleViewModalClose = () => {
    setIsViewModal(false);
    setData(null);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Div
          sx={{
            textAlign: "center",
            fontSize: "20px",
            color: "peru",
            m: "10px",
          }}
        >
          {"Product"}
        </Div>

        <Box sx={{ flexGrow: 1 }} className="card">
          <Grid container spacing={{ xs: 2 }} className="productList">
            {productList?.map((obj) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={obj.id}
                  className="listItem"
                >
                  <Card
                    key={obj.id}
                    className="productCard"
                    sx={{
                      border: "1px dashed black",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height={150}
                      image={obj.image}
                      alt="Paella dish"
                      className="productImages"
                    />
                    <CardHeader
                      className="cardTitle_subTitle"
                      title={obj.title}
                      subheader={obj.category}
                    />
                    <CardContent
                      sx={{ padding: "0px 15px" }}
                      className="cardContent"
                    >
                      <Typography
                        color="text.secondary"
                        variant="body1"
                        component="h1"
                        className="product_desc"
                      >
                        {obj.description}
                      </Typography>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        className="price_rate"
                      >
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          marginRight={2}
                        >
                          <b>Price:</b> ₹{obj.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <b>Rating:</b> {obj.rating.rate}
                        </Typography>
                      </Box>

                      <Button onClick={() => handleViewModal(obj)}>View</Button>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
          <ProductView
            open={isViewModal}
            onClose={handleViewModalClose}
            datasend={isViewModal ? data : null}
          />
        </Box>
      </Container>
    </>
  );
};

export default Product;

// else {
//   if (authStatus === 1) {
//     navigation("/product");
//   } else {
//     navigation("/");
//   }
// }

// const initialDetails = () => {
//   try {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
//         console.log(response.data);
//         setList([...response.data]);
//         console.log("hello", response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   } catch (err) {
//     console.log(err);
//   }
// };

// console.log("productlisrt", productList);

// dispatch(GetProduct());
// const { pathname } = useLocation();
// const { id } = useParams();
// const [searchParams] = useSearchParams();
//   const { authStatus } = useContext(AuthContext);
//   useEffect(() => {
//     console.log(pathname);
//     console.log(searchParams.get("email"));
//     console.log(searchParams.get("password"));
//     if (sessionStorage.getItem("token") == "false") {
//       navigation("/");
//     }
//   }, []);
