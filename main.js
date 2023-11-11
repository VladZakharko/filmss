class Movie {
    constructor(title, duration) {
        this.title = title;
        this.duration = duration;

    }

}

class Ticket {
    constructor(movie, cinemaHall, numSeats, price) {
        this.movie = movie;
        this.cinemaHall = cinemaHall;
        this.numSeats = numSeats;
        this.ticketNimber = this.generateTicketNumber();
        this.ticketCost = this.calculateTicketsCost();
    }

    calculateTicketsCost() {
        return this.movie.duration * this.numSeats + 0.1;
    }

    generateTicketNumber() {
        return Math.floor(Math.random() * 1000000);
    }

}

// let ticket = new Ticket();
// console.log(ticket.generateTicketNumber());

class CinemaHall {
    constructor(hallNumber, capacity) {
        this.hallNumber = hallNumber;
        this.capacity = capacity;
        this.availableSeats = capacity;
        this.bookedSeats = [];
        this.movie = null;
    }

    displayInfo() {
        console.log(`Hall: ${this.hallNumber}: ${this.availableSeats} available seats`);
    }

    setMovie(movie) {
        this.movie = movie;
    }

    bookSeat(numSeats) {
        if (this.availableSeats >= numSeats) {
            this.availableSeats -= numSeats;
            this.bookedSeats.push(numSeats);
            const ticket = new Ticket(this.movie, this, numSeats);
            console.log(`${numSeats} seats booked succsessfully: Ticket number: ${ticket.ticketNumber}`)
            return ticket;
        } else {
            console.log(`Not enough seats available`);
            return null;
        }
    }
    showBookedSeats() {
        console.log(`Hall ${this.hallNumber} - Booked seats: ${this.bookedSeats}`);
    }
}

class BookingSystem {
    constructor() {
        this.movies = [];
        this.cinemaHalls = [];
    }

    addMovie(title, duration) {
        const monie = new Movie(title, duration);
        this.movies.push(movie);
    }

    addCinemaHals(hallNumber, capacity){
        const hall = new CinemaHalls(hallNumber, capacity);
        this.cinemaHalls.push(hall);
    }
}


