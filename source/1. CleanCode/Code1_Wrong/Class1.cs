/* Changes
 * 10.05.2015  Class creation
 * 
 * 15.05.2016 Added GetThem method
 */

namespace Demo1.Code1_Wrong
{
    using System.Collections.Generic;

    class Class1
    {
        List<int[]> theList;

        public List<int[]> GetThem()
        {
            List<int[]> list1 = new List<int[]>();
            foreach (int[] x in this.theList)
            {
                // Check if first element is 4
                if (x[0] == 4)
                {
                    list1.Add(x);
                }
            }

            return list1;
        }
    }
}
