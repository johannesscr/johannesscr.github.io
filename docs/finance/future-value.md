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
FV = PV \times \left(1 + r \times n\right)
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
& = 100 + \underset{\text{year 1}}{12} + \underset{\text{year 2}}{12} + \cdots +\underset{\text{year 10}}{12}  \\
& = 100 + \underset{\text{interest amount}}{12} \times 10 \\
& = 100 + (100 \times 0.12) \times 10 \\
& = 100 + (100 \times 0.12 \times 10) \\
& = 100 (1 + 0.12 \times 10) \\
& = PV (1 + r \times n) \qquad \qquad \text{here we see the formula derived} \\
& = 220
\end{align}
$$

[//]: # (## Annual Compounded)

[//]: # ()
[//]: # (## Non-Annual Compounded)

