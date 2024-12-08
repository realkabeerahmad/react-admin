import React from "react";
import Button from "../Components/Button/Button";
import { Send } from "@mui/icons-material";

// Account details data for demo purposes
const AccountDetails = {
  accountNo: "1234 5678 9012 3456",
  accountTitle: "Test Account",
  accountType: "Current",
  accountCurrencyCode: "USD",
  accountBalance: 5000.0,
  transactions: [
    {
      transId: 120,
      amount: -1000,
      description: "Dummy Transaction on XYZ merchant",
      transDate: "10/04/2024",
      transTime: "10:20:57",
    },
    {
      transId: 120,
      amount: -1000,
      description: "Dummy Transaction on XYZ merchant",
      transDate: "10/04/2024",
      transTime: "10:20:57",
    },
    {
      transId: 120,
      amount: -1000,
      description: "Dummy Transaction on XYZ merchant",
      transDate: "10/04/2024",
      transTime: "10:20:57",
    },
    {
      transId: 120,
      amount: -1000,
      description: "Dummy Transaction on XYZ merchant",
      transDate: "10/04/2024",
      transTime: "10:20:57",
    },
    {
      transId: 120,
      amount: -1000,
      description: "Dummy Transaction on XYZ merchant",
      transDate: "10/04/2024",
      transTime: "10:20:57",
    },
    {
      transId: 120,
      amount: -1000,
      description: "Dummy Transaction on XYZ merchant",
      transDate: "10/04/2024",
      transTime: "10:20:57",
    },
    {
      transId: 120,
      amount: -1000,
      description: "Dummy Transaction on XYZ merchant",
      transDate: "10/04/2024",
      transTime: "10:20:57",
    },
    // ...additional transactions
  ],
};

// Main component for Home
const HOME = () => {
  return (
    <div style={styles.container}>
      {/* Account Details */}
      <AccountSection />

      {/* Action Buttons */}
      <ActionsSection />

      {/* Transaction List */}
      <TransactionsSection transactions={AccountDetails.transactions} />
    </div>
  );
};

// Separate component for Account Section
const AccountSection = () => (
  <section style={styles.accountWidget}>
    <h2 style={styles.heading}>Account Overview</h2>
    <p style={styles.accountBalance}>
      <strong>
        {AccountDetails.accountCurrencyCode?.toUpperCase()}{" "}
        {AccountDetails.accountBalance.toFixed(2)}
      </strong>
    </p>
    <p style={styles.accountInfo}>
      {AccountDetails.accountTitle} - {AccountDetails.accountNo}
    </p>
  </section>
);

// Separate component for Actions Section
const ActionsSection = () => (
  <section style={styles.actionsWidget}>
    <Button children="Send Funds" action="/" type="LINK" icon={<Send />} />
    <Button children="Receive Funds" action="/" type="LINK" icon={<Send />} />
    <Button children="Make Payments" action="/" type="LINK" icon={<Send />} />
  </section>
);

// Separate component for Transactions Section
const TransactionsSection = ({ transactions }) => (
  <section style={styles.transactionsWidget}>
    <h2 style={styles.heading}>Recent Transactions</h2>
    <div style={styles.transactionsList}>
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.transId} transaction={transaction} />
      ))}
    </div>
  </section>
);

// Separate component for each Transaction Item
const TransactionItem = ({ transaction }) => (
  <div style={styles.transactionItem}>
    <p style={styles.transactionDescription}>
      <strong>{transaction.description}</strong>
    </p>
    <p style={styles.transactionDetails}>
      Amount: {transaction.amount < 0 ? "-" : ""}${Math.abs(transaction.amount)}
      <br />
      Date: {transaction.transDate} Time: {transaction.transTime}
    </p>
  </div>
);

// Styling for the components
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px",
    backgroundColor: "#f4f6f8",
  },
  accountWidget: {
    width: "100%",
    maxWidth: "600px",
    padding: "16px",
    marginBottom: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  actionsWidget: {
    display: "flex",
    gap: "16px",
    marginBottom: "20px",
    justifyContent: "center",
  },
  transactionsWidget: {
    width: "100%",
    maxWidth: "600px",
    padding: "16px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#333",
    marginBottom: "12px",
  },
  accountInfo: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "8px",
  },
  accountBalance: {
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "var(--secondary-text)",
  },
  transactionsList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  transactionItem: {
    padding: "12px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
  },
  transactionDescription: {
    fontSize: "1rem",
    color: "#333",
    marginBottom: "6px",
  },
  transactionDetails: {
    fontSize: "0.9rem",
    color: "#555",
  },
};

export default HOME;
