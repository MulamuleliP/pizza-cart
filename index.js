function pizzaCart() {
    return {
        prices: {
            small: 0,
            medium: 0,
            large: 0,
        },
        payment: 0,
        change: 0,
        message: '',
        add(size) {
            this.prices[size] += size === 'small' ? 49.00 : size === 'medium' ? 89.00 : 129.00;
        },
        remove(size) {
            if (this.prices[size] > 0) {
                this.prices[size] -= size === 'small' ? 49.00 : size === 'medium' ? 89.00 : 129.00;
            }
        },
        get totalCost() {
            return (this.prices.small + this.prices.medium + this.prices.large);
        },
        pay() {
            const total = parseFloat(this.totalCost);
            const payment = parseFloat(this.payment);
            if (payment >= total) {
                this.message = '"Enjoy" your pizza';
                this.prices.small = this.prices.medium = this.prices.large = 0;
                this.payment = 0;
                this.change = (payment  - total);
            } else {
                this.message = 'Sorry - that is not enough money!';
                this.change = 0;
            }
        }
        
    };

}
