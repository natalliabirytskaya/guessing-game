class GuessingGame {
    constructor() {
		this.min = 0;
		this.max = 0;
		this.guessing = 0;
	}

    setRange(min, max) {
		this.min = min;
		this.max = max;
    }

    guess() {
		this.guessing = Math.round((this.min + this.max) / 2);
		return this.guessing;
    }

    lower() {
	    this.max = this.guessing;
    }

    greater() {
		this.min = this.guessing;
    }
}

module.exports = GuessingGame;
