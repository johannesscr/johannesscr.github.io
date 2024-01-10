# Future Value

> [References](/references) [1]

Scenario: *We have a sum of money that we are able to invest at an interest rate
for a period of time; we would like to know what it will be worth*

| Variable | Description                                |
|----------|--------------------------------------------|
| $PV$     | The present value                          |
| $FV$     | The future value                           |
| $r$      | The interest rate                          |
| $n$      | The number of periods                      |
| $m$      | The number of compounding periods per year |

### Base Scenario

We have a present value (or principal amount) of 100 that we would like to
invest at an interest rate of 12% per annum for 10 years.

## Simple Interest

*Simple interest* is interest that is calculated only on the principal amount
of the loan. It is calculated by multiplying the principal amount by the
interest rate by the number of periods.

$$
FV = PV \left(1 + r \times n\right)
$$

#### Scenario Breakdown

This means that means we have:

- $PV$ the present value or principal amount of 100.
- $r$ the interest rate of 12% per annum.
- $n$ the number of periods of 10 years.

Interest is calculated on the principal amount only, so we have:
$$\text{interest amount} = PV \times r = 100 \times 0.12 = 12 $$

The interest amount is added to the principal amount every year to give you the
future value.

| Year     | Opening Balance | Interest | Future Value |
|----------|-----------------|----------|--------------|
| 0        | 100             | 0        | 100          |
| 1        | 100             | 12       | 112          |
| 2        | 112             | 12       | 124          |
| 3        | 124             | 12       | 136          |
| $\vdots$ | $\vdots$        | $\vdots$ | $\vdots$     |
| 10       | 208             | 12       | 220          |

$$
\begin{align}
FV & = 100 + \text{interest over 10 year} \\
& = 100 + \text{interest for year 1} + \text{interest for year 2} + \cdots + \text{interest for year 10} \\
& = 100 + \underset{\text{year 1}}{12} + \underset{\text{year 2}}{12} + \cdots +\underset{\text{year 10}}{12} \\
& = 100 + \underset{\text{interest amount}}{12} \times 10 \\
& = 100 + (100 \times 0.12) \times 10 \\
& = 100 + (100 \times 0.12 \times 10) \\
& = 100 (1 + 0.12 \times 10) \\
& = PV (1 + r \times n) \qquad \qquad \text{here we see the formula derived} \\
& = 220
\end{align}
$$

## Annual Compounded

*Annual compounding* is interest that is calculated on the principal amount and
the interest that is earned on the principal amount in previous periods. It is
calculated by multiplying the principal amount by the interest rate by the
number of periods.

$$
FV = PV \left(1 + r\right)^n
$$

#### Scenario Breakdown

This means that means we have:

- $PV$ the present value or principal amount of 100.
- $r$ the interest rate of 12% per annum.
- $n$ the number of periods of 10 years.
- $m$ the number of compounding periods per year of 1.

Interest is calculated on the principal amount and the interest that is earned
on the principal amount in previous periods, so we have:

$$\text{interest amount} = PV \times r = 100 \times 0.12 = 12 $$

However, the interest amount is added to the principal amount every year to give
you the future value.

| Year     | Opening Balance | Calculation        | Interest | Future Value |
|----------|-----------------|--------------------|----------|--------------|
| 0        | 100             | $100(1 + 0)$       | 0        | 100          |
| 1        | 100             | $100(1 + 0.12)$    | 12       | 112          |
| 2        | 112             | $112(1 + 0.12)$    | 13.44    | 125.44       |
| 3        | 125.44          | $125.44(1 + 0.12)$ | 15.05    | 140.49       |
| $\vdots$ | $\vdots$        | $\vdots$           | $\vdots$ | $\vdots$     |
| 10       | 277.30          | $277.30(1 + 0.12)$ | 36.94    | 310.58       |

Here we see the difference between compounding and simple interest. The
simple interest remains the same year-on-year, whereas the compounding interest
increases year-on-year.

| Year     | Simple Interest | Compounding Interest |
|----------|-----------------|----------------------|
| 0        | 0               | 0                    |
| 1        | 12              | 12                   |
| 2        | 12              | 13.44                |
| 3        | 12              | 15.05                |
| 4        | 12              | 16.86                |
| $\vdots$ | $\vdots$        | $\vdots$             |
| 10       | 12              | 36.94                |

:::tip
This is the ***magic*** of compounding interest. In the example, by year 10 the
compounding interest is *more than 3 times* the simple interest.
:::

## Non-Annual Compounded

*Non-annual compounding* is interest that is calculated on the principal amount
and the interest that is earned on the principal amount in previous periods. It
is calculated by multiplying the principal amount by the interest rate by the
number of periods.

$$
FV = PV \left(1 + \frac{r}{m}\right)^{mn}
$$

However, the interest is compounded more than once per year, so we need to
divide the interest rate by the number of compounding periods per year.

| Interest Rate | Compounding Periods Per Year | Calculation                            | Interest Per Compounding | Effective Interest Rate |
|---------------|------------------------------|----------------------------------------|--------------------------|-------------------------|
| $r$           | $m$                          | $PV \left(1 + \frac{r}{m}\right)^{mn}$ | $PV \times \frac{r}{m}$  | $r_e$                   |
| 12%           | 1                            | $100(1 + 0.12)^n$                      | 12 %                     | 12 %                    |
| 12%           | 2                            | $100(1 + 0.12/2)^{2n}$                 | 6 %                      | 12.36 %                 |
| 12%           | 4                            | $100(1 + 0.12/4)^{4n}$                 | 3 %                      | 12.55 %                 |
| 12%           | 12                           | $100(1 + 0.12/12)^{12n}$               | 1 %                      | 12.68 %                 |

#### Scenario Breakdown

This means that means we have:

- $PV$ the present value or principal amount of 100.
- $r$ the interest rate of 12% per annum.
- $n$ the number of periods of 10 years.
- $m$ the number of compounding periods per year of 12.
- $r_e$ the effective interest rate of 12.68% per annum.

Interest is calculated on the principal amount and the interest that is earned
on the principal amount in previous periods, so we have:

$$\text{interest amount} = PV \times \frac{r}{m} = 100 \times \frac{0.12}{12} = 1 $$

However, the interest amount is added to the principal amount every year to give
you the future value.

| Year     | Opening Balance | Calculation             | Interest | Future Value |
|----------|-----------------|-------------------------|----------|--------------|
| 0        | 100             | $100(1 + 0)$            | 0        | 100          |
| 1        | 100             | $100(1 + 0.01)^{12}$    | 1        | 112.68       |
| 2        | 112.68          | $112.68(1 + 0.01)^{12}$ | 1.01     | 126.97       |
| 3        | 126.97          | $126.97(1 + 0.01)^{12}$ | 1.02     | 143.07       |
| $\vdots$ | $\vdots$        | $\vdots$                | $\vdots$ | $\vdots$     |
| 10       | 298.77          | $310.58(1 + 0.01)^{12}$ | 1.12     | 330.03       |

## Comparison

| Scenario         | Simple Interest | Annual Compounding | Non-Annual Compounding |
|------------------|-----------------|--------------------|------------------------|
| Interest Rate    | 12%             | 12%                | 12%                    |
| Compounding      | 0               | 1                  | 12                     |
| Effective Rate   | 12%             | 12%                | 12.68%                 |
| Future Value     | 220             | 310.58             | 330.03                 |

The table illustrates the difference between simple interest, annual compounding
and non-annual compounding. The effective interest rate is the same for annual
compounding and non-annual compounding, but the future value is different.
