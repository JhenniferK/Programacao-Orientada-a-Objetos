// Para o problema de remover elementos duplicados de uma lista mantendo apenas a primeira ocorrência de cada um,
// pode-se utilizar duas classes de coleções: ArrayList e LinkedHashSet. O ArrayList é usado para armazenar a lista
// original e a lista final sem duplicatas. Ele implementa a interface List, que mantém a ordem de inserção dos elementos
// e permite acesso rápido por índice. Já o LinkedHashSet é escolhido por combinar as características da interface
// Set com a preservação da ordem de inserção. Assim, ele remove duplicatas enquanto mantém a ordem dos elementos
// conforme foram adicionados. Isso é importante para o problema em questão, já que é preciso garantir que a primeira
// ocorrência de cada elemento seja mantida. Outra alternativa seria utilizar a HashSet que, embora seja mais rápido em
// operações básicas, como inserção e verificação de duplicatas, ele não preserva a ordem dos elementos, o que não se
// torna adequado para este problema. Portanto, a combinação de ArrayList e LinkedHashSet oferece um bom equilíbrio
// entre desempenho e simplicidade.

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

public class RemoverRepeticoes {
    public static void main(String[] args) {
        List<Integer> listaOriginal = new ArrayList<>();

        listaOriginal.add(1);
        listaOriginal.add(2);
        listaOriginal.add(1);
        listaOriginal.add(3);
        listaOriginal.add(2);
        listaOriginal.add(4);
        listaOriginal.add(1);

        List<Integer> listaSemRepeticoes = removRep(listaOriginal);

        System.out.println("Lista Original: " + listaOriginal);
        System.out.println("Lista Sem Duplicações: " + listaSemRepeticoes);
    }

    public static <T> List<T> removRep(List<T> list) {
        Set<T> set = new LinkedHashSet<>(list);
        return new ArrayList<>(set);
    }
}
