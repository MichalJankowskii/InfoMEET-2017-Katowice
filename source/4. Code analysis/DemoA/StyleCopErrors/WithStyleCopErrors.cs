namespace Demo4A.StyleCopErrors
{
    public class WithStyleCopErrors
    {


        public int[] sort(int[] Array)
        {
            int temp;
            for (int i = 0; i <= Array.Length - 2; i++) {



                for (int j = 0; j <= Array.Length - 2; j++)
                { if (Array[j] > Array[j + 1])
                    {
                        temp = Array[j + 1];
                        Array[j + 1] = Array[j];
                        Array[j] = temp;
                    }
                }
  
            }


            return Array;

        }
    }
}