namespace Demo1.Code1_Correct
{
    using System.Collections.Generic;
    using System.Collections.ObjectModel;

    public class Board
    {
        public Board(IList<Cell> cells)
        {
            this.Cells = new ReadOnlyCollection<Cell>(cells);
        }

        public ReadOnlyCollection<Cell> Cells { get; }
    }
}
