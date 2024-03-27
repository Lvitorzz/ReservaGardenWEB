import { Pipe, PipeTransform } from '@angular/core';
import { MoradorProduto } from 'src/app/models/moradorProduto';

@Pipe({
  name: 'filterByMorador'
})
export class FilterByMoradorPipe implements PipeTransform {
  transform(produtosMorador: MoradorProduto[], moradorId: number | undefined): MoradorProduto[] {
    if (!moradorId) {
      return [];
    }
    return produtosMorador.filter(produtoMorador => produtoMorador.moradorId === moradorId);
  }
}