import { createLesson, getLessons, updateLesson, deleteLesson } from "../../services/lessons.js";

export class MCards {
    constructor(mDate) {
        this.mDate = mDate;
        this.cards = [];
        this.listeners = [];
        this.fetchLessons();
    }

    async fetchLessons() {
        const lessonsRes = await getLessons();
        const lessons = lessonsRes.data.lessons;
        if (lessons.length > 0) this.cards = lessons;
        this.notifyListeners();
    }

    addListener(listener) {
        this.listeners.push(listener);
    }

    // Méthode pour notifier tous les listeners
    notifyListeners() {
        this.listeners.forEach((listener) => listener());
    }


    async addCard(card) {
        if (card.name === "undefined" || card.name === null || card.name === "") return;
        const currentDate = new Date();
        const dateDMY = this.mDate.getDateInDMY(currentDate);
        card.date = dateDMY;
        await createLesson(card);
        this.fetchLessons();
    }

    async upgradeCard(cardId) {
        const cardSelected = this.cards.find((card) => parseInt(card.id) === parseInt(cardId));

        const newDate = this.mDate.upgradeDateByStep(cardSelected);
        cardSelected.date = newDate;
        if (cardSelected.step < 5) {
            cardSelected.step++;
        }

        await updateLesson(cardId, cardSelected);
        this.notifyListeners();
    }

    async delayCard(cardId) {
        const cardSelected = this.cards.find((card) => parseInt(card.id) === parseInt(cardId));
        const dateDelayed = this.mDate.delayOneDay(cardSelected);
        cardSelected.date = dateDelayed;
        await updateLesson(cardId, cardSelected);
        this.fetchLessons();
    }

    async resetCard(cardId) {
        const cardSelected = this.cards.find((card) => parseInt(card.id) === parseInt(cardId));
        const dateInDMY = this.mDate.getDateInDMY(new Date());
        cardSelected.date = dateInDMY;
        cardSelected.step = 1;
        await updateLesson(cardId, cardSelected);
        this.fetchLessons();
    }

    async deleteCard(cardId) {
        const cards = this.cards.filter((card) => parseInt(card.id) !== parseInt(cardId));
        this.cards = cards;
        await deleteLesson(cardId)
        this.fetchLessons();
    }

    getCardById(cardId) {
        return this.cards.find((card) => parseInt(card.id) === parseInt(cardId));
    }

    getCardsForWeekRangeDate(weekRangeDate) {
        const currentDay = this.mDate.getCurrentDay();
        for (let i = 0; i < weekRangeDate.length; i++) {
            if ((weekRangeDate[i].day).toLowerCase() === (currentDay.name).toLowerCase()) {
                weekRangeDate[i].isCurrentDay = true;
            } else {
                weekRangeDate[i].isCurrentDay = false;
            }

            for (let j = 0; j < this.cards.length; j++) {
                if (!weekRangeDate[i].cards) {
                    weekRangeDate[i].cards = [];
                }
                const date = new Date(this.cards[j].date);
                const formattedDate = date.toLocaleDateString("fr-CA");

                // console.log(JSON.stringify(weekRangeDate[i].date)); // "2025-04-14"
                // console.log(JSON.stringify(this.cards[j].date)); // "2025-04-04T22:00:00.000Z"
                // console.log(JSON.stringify(weekRangeDate[i].date)); // "2025-04-14"
                if (JSON.stringify(weekRangeDate[i].date) === JSON.stringify(formattedDate)) {
                    weekRangeDate[i].cards.push(this.cards[j]);
                }
            }
        }

        return weekRangeDate;
    }

    isCemetaryNeeded() {
        const ghostsCards = this.mDate.getCardsRIP(this.cards);
        return ghostsCards;
    }
}