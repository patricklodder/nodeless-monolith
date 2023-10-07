import * as React from "react";
import { Box } from "@mui/material/";
import { AllTransactionsContext } from "../../../../contexts/transactions/AllTransactionsContext";
import TransactionsTable from "../../components/TransactionsTable";
import ViewTransactionsModal from "../../components/ViewTransactionsModal";

const AllTransactionsContent = () => {
  const {
    transactions,
    loading,
    page,
    setPage,
    count,
    refetch,
    rowsPerPage,
    currentTransaction,
    setCurrentTransaction,
    setViewTransactionModal,
    viewTransactionModal,
  } = React.useContext(AllTransactionsContext);

  return (
    <Box sx={styles.container}>
      <Box
        sx={{
          border: "1px solid #E5E7EB",
          borderRadius: "10px",
        }}
      >
        <TransactionsTable
          count={count}
          transactions={transactions}
          loading={loading}
          page={page}
          refetch={refetch}
          rowsPerPage={rowsPerPage}
          setCurrentTransaction={setCurrentTransaction}
          setPage={setPage}
          setViewTransactionModal={setViewTransactionModal}
        />

        <ViewTransactionsModal
          currentTransaction={currentTransaction}
          setViewTransactionModal={setViewTransactionModal}
          viewTransactionModal={viewTransactionModal}
        />
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    padding: {
      xs: 0,
      md: "0px 40px 20px 40px",
    },
  },
};

export default AllTransactionsContent;
