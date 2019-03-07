import { Injectable } from '@nestjs/common';
import { CreateBookDTO } from './dto/create-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './dto/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {

    constructor(@InjectRepository(Book) private readonly bookRepository: Repository<Book>) {}

    public async getBooks(): Promise<Book[]> {
        return await this.bookRepository.find();
    }

    public async getBookById(bookId: number): Promise<Book> {
        return await this.bookRepository.findOne(bookId);
    }

    public async save(bookDTO: CreateBookDTO): Promise<string> {
        await this.bookRepository.save(bookDTO);
        return `Sopla copa ${bookDTO.id} ${bookDTO.title} ${bookDTO.description} ${bookDTO.author}`;
    }

    public async delete(bookId: number): Promise<string> {
        const book = await this.bookRepository.findOne(bookId);
        await this.bookRepository.remove(book);
        return `Eliminando ${bookId}`;
    }

}
