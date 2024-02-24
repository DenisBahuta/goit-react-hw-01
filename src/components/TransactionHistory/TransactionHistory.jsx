import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div className={css.transactionContainer}>
      <table className={css.transactionTable}>
        <thead className={css.transactionHead}>
          <tr>
            <th className={css.transactionContent}>Type</th>
            <th className={css.transactionContent}>Amount</th>
            <th className={css.transactionContent}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr className={css.transactionRow} key={item.id}>
              <td className={css.transactionContent}>{item.type}</td>
              <td className={css.transactionContent}>{item.amount}</td>
              <td className={css.transactionContent}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
