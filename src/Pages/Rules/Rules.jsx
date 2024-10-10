import React from "react";
import "./Rules.css";

const Rules = () => {
  return (
    <div className="rules-container">
      <div className="rule-container">
        <h1 className="heading">Tournament Rules</h1>

        {/* Section 1: Eligibility & Registration */}
        <section className="rule-section">
          <h2 className="section-title">
            Section 1: Eligibility & Registration
          </h2>
          <ul className="rule-list">
            <li>
              <strong>Player Eligibility:</strong> Players must be at least
              level 15, and their in-game ID must match the registered ID.
            </li>
          </ul>
        </section>

        {/* Section 2: Payment & Refunds */}
        <section className="rule-section">
          <h2 className="section-title">Section 2: Payment & Refunds</h2>
          <ul className="rule-list">
            <li>
              <strong>Payment Submission:</strong> Send a screenshot of your
              payment and check that your details are correct.
            </li>
            <li>
              <strong>Entry Fee Refund:</strong> If you cannot join the
              tournament, your entry fee will be refunded.
            </li>
            <li>
              <strong>Elimination Refund:</strong> If you are eliminated for any
              reason other than being killed by another player, you will receive
              50% of your entry fee back.
            </li>
          </ul>
        </section>

        {/* Section 3: Fair Play */}
        <section className="rule-section">
          <h2 className="section-title">Section 3: Fair Play</h2>
          <ul className="rule-list">
            <li>
              <strong>Hacking Policy:</strong> No hacking is allowed. Anyone
              caught hacking will be banned.
            </li>
          </ul>
        </section>

        {/* Section 4: Gameplay & Conduct */}
        <section className="rule-section">
          <h2 className="section-title">Section 4: Gameplay & Conduct</h2>
          <ul className="rule-list">
            <li>
              <strong>ID Policy:</strong> Only the registered ID can be used. If
              you need to change it, notify the group 45 minutes before the
              match.
            </li>
            <li>
              <strong>Screenshot Requirement:</strong> Submit a screenshot of
              your match results and your elimination at the end of the game.
            </li>
          </ul>
        </section>

        {/* Section 5: Rewards */}
        <section className="rule-section">
          <h2 className="section-title">Section 5: Rewards</h2>
          <ul className="rule-list">
            <li>
              <strong>Performance Rewards:</strong> Players who perform well in
              three or more consecutive tournaments will receive a surprise
              reward and discounts.
            </li>
          </ul>
        </section>

        {/* Important Notes */}
        <section className="rule-section">
          <h2 className="section-title">Important Notes:</h2>
          <ul className="rule-list">
            <li>Please read and understand all rules before participating.</li>
            <li>
              Tournament administrators reserve the right to modify rules.
            </li>
            <li>
              Any disputes or issues will be resolved by tournament
              administrators.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Rules;
