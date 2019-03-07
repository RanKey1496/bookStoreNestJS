import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';

@Controller('books')
export class BooksController {

    constructor(private booksService: BooksService) { }

    @Get()
    public async getBooks() {
        return await this.booksService.getBooks();
    }

    @Get(':bookId')
    public async getBook(@Param('bookId') bookId: number) {
        return await this.booksService.getBookById(bookId);
    }

    @Post()
    public async addBook(@Body() bookDTO: CreateBookDTO) {
        return await this.booksService.save(bookDTO);
    }

    @Delete()
    public async deleteBook(@Query() query) {
        return await this.booksService.delete(query.bookId);
    }

}
