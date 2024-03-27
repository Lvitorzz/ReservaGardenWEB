import { TestBed } from '@angular/core/testing';

import { MoradorProdutoService } from './morador-produto.service';

describe('MoradorProdutoService', () => {
  let service: MoradorProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoradorProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
