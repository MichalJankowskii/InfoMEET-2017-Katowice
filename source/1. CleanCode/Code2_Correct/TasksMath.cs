namespace Demo1.Code2_Correct
{
    using System.Collections.Generic;
    using System.Linq;

    public static class TasksMath
    {
        private const double WorkingHoursInDay = 8.0;

        private const double ProductiveHoursInDay = 7.0;

        public static double RealDays(IList<ITask> tasks)
        {
            return tasks.Sum(task => task.Duration / (ProductiveHoursInDay / WorkingHoursInDay));
        }
    }
}
