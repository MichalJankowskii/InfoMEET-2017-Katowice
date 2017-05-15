namespace Demo1.Code1_Correct
{
    using System.Collections.Generic;
    using System.Linq;

    public class Game
    {
        public Game(Board board)
        {
            this.Board = board;
        }

        public Board Board { get; }

        public IEnumerable<Cell> FlaggedCells => this.Board.Cells.Where(x => x.IsFlagged);

        public IEnumerable<Cell> GetFlaggedCells()
        {
            var flaggedCells = new List<Cell>();
            foreach (Cell cell in this.Board.Cells)
            {
                if (cell.IsFlagged)
                {
                    flaggedCells.Add(cell);
                }
            }

            return flaggedCells;
        }
    }
}
