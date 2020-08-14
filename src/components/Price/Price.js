import React from 'react'
import PropTypes from 'prop-types'
import useCurrency from '../../hooks/useCurrency';
import useNumber from '../../hooks/useNumber';

const Price = ({currencyId,price}) => {

    const [getCurrencySimbol]= useCurrency();
    const [getFormatNumber] = useNumber();

    const currencySimbol = getCurrencySimbol(currencyId);
    const formatNumber = getFormatNumber(price,2);

    return (
        <>
            {currencySimbol} {formatNumber[0]}<sup>{formatNumber[1]}</sup>
        </>
    )
}

Price.propTypes = {
    currencyId: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
}

export default Price;
