export const poolOverview = {
  collateralValue: "$13,262,070",
  advanceRate: "90.00%",
  avgLoanAmount: "$90,612",
  totalLoans: "146",
  description: "Figure Lending LLC is the largest U.S. non-bank HELOC originator ($14bn+ originated since 2018). Figure regularly holds these loans on the balance sheet, sells loans to institutional whole loan partners and is also a frequent securitizer of HELOCs."
};

export const borrowerProfile = [
  {
    category: "Demographics",
    metrics: [
      { label: "WA Borrower Age", value: "51", format: "years" },
      { label: "WA Income", value: "$187,679", format: "currency" },
      { label: "WA Credit Score", value: "754", format: "score" },
      { label: "Years Since Purchase", value: "10", format: "years" }
    ]
  },
  {
    category: "Property Metrics",
    metrics: [
      { label: "WA Home Value", value: "$724,229", format: "currency" },
      { label: "WA CLTV (post)", value: "62.73%", format: "percentage" },
      { label: "WA DTI (post)", value: "37.05%", format: "percentage" },
      { label: "NOO Concentration", value: "8.58%", format: "percentage" }
    ]
  },
  {
    category: "Loan Structure",
    metrics: [
      { label: "WA Coupon", value: "9.76%", format: "percentage" },
      { label: "WA Term", value: "25.50", format: "years" },
      { label: "WA Origination Fee", value: "3.36%", format: "percentage" },
      { label: "WA PTI", value: "10.00%", format: "percentage" }
    ]
  }
];

export const lienDistribution = [
  { type: "1st Lien", percentage: 13.48, color: "header-glow" },
  { type: "2nd Lien", percentage: 82.60, color: "crypto-accent" },
  { type: "3rd Lien", percentage: 3.84, color: "muted-foreground" }
];

export const riskMetrics = [
  { label: "Collateral Value", value: "$13.3M", trend: "up", description: "Total underlying asset value" },
  { label: "Advance Rate", value: "90%", trend: "stable", description: "Loan-to-collateral ratio" },
  { label: "Credit Quality", value: "754", trend: "up", description: "Weighted average credit score" },
  { label: "Diversification", value: "146", trend: "up", description: "Number of individual loans" }
];