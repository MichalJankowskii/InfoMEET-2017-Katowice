namespace Demo1.Code2_Wrong
{
    class MagicNumbers
    {
        public double Result(int[] t)
        {
            double i = 0;
            for (int a = 0; a < 23; a++)
            {
                i += t[a] * 8 / 7;
            }

            return i;
        }
    }
}
