import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "../../redux/store";

import {
  Table,
  Card,
  Button,
  TableRow,
  TableBody,
  TableCell,
  Container,
  TableContainer,
} from "@mui/material";
import DeleteModal from "./Delete/DeleteModal";
import DeleteModalView from "./Delete/DeleteModalView";
import CrudeAction from "../../redux/slice/crude/CrudeAction";
import CrudeModal from "./CrudeModal";
import CrudeModalView from "./CrudeModalView";
import UserListHead from "../../List/UserListHead";
// ---------------------------

const TALBE_HEAD = [
  { id: "category", label: "category", alignRight: false },
  { id: "price", label: "price", alignRight: false },
  { id: "count", label: "count", alignRight: false },
  { id: "rate", label: "rate", alignRight: false },
  { id: "action", label: "action", alignRight: false },
];

// ---------------------------

const Crude = () => {
  const productListData = [
    { category: "hello", price: 2, rate: 1, count: 1, _id: 1 },
    { category: "add", price: 2, rate: 1, count: 1, _id: 1 },
    { category: "dwqr", price: 2, rate: 1, count: 1, _id: 1 },
    { category: "wedwfd", price: 2, rate: 1, count: 1, _id: 1 },
  ];
  // ---------------------------

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.crude);

  useEffect(() => {
    dispatch(CrudeAction.GetCrude());
  }, []);

  // Add Section=======================

  const handleAdd = (e) => {
    console.log("azsghfdjhsbn ");
    setIsOpenModal(true);
    console.log("hello", isOpenModal, setIsOpenModal);
  };

  const handleCloseModal = () => {
    setData(null);
    setIsEdit(false);
    setIsOpenModal(false);
  };

  // Edit Section ========================
  const onEditHandlar = (list) => {
    setData(list);
    setIsEdit(true);
    setIsOpenModal(true);
  };

  // Delete Section =========================

  const onDeleteHandlar = (listId) => {
    // console.log("listId", listId);
    setDeleteId(listId);
    setIsDeleteModal(true);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModal(false);
  };

  const hanadleModalDelete = () => {
    dispatch(CrudeAction.deleteCrudeData(deleteId));
    setDeleteId(null);
    setIsDeleteModal(false);
  };

  // =====================================

  return (
    <>
      <Container className="customelisttable">
        <Button variant="contained" onClick={(e) => handleAdd(e)}>
          Add
        </Button>
        <Card>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table className="TableSpace">
              <UserListHead headLabel={TALBE_HEAD} />
              <TableBody>
                {productList.map((list) => (
                  <TableRow hover key={list.id} tabIndex={-1}>
                    <TableCell align="left">{list.category}</TableCell>
                    <TableCell align="left">{list.price}</TableCell>
                    <TableCell align="left">{list.count}</TableCell>
                    <TableCell align="left">{list.rate}</TableCell>
                    <TableCell align="left">
                      <Button onClick={() => onEditHandlar(list)}>Edit</Button>
                      <Button onClick={() => onDeleteHandlar(list.id)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Container>

      {/* Add Section & Edit */}

      <CrudeModal open={isOpenModal} onClose={handleCloseModal}>
        <CrudeModalView
          closeModal={handleCloseModal}
          onEdit={isEdit}
          currentModal={isEdit ? data : null}
        />
      </CrudeModal>

      {/* #Delete Section  */}

      <DeleteModal
        open={isDeleteModal}
        onClose={handleDeleteModalClose}
        className="modalopen"
      >
        <DeleteModalView
          closeModal={handleDeleteModalClose}
          handleDelete={hanadleModalDelete}
        />
      </DeleteModal>
    </>
  );
};

export default Crude;
