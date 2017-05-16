namespace Demo4A.FxCopErrors
{
    using System;

    public class DisposableClass : IDisposable
    {
        private int number;

        ~DisposableClass()
        {
            this.number = 0;
        }

        public void Dispose()
        {
            throw new Exception();
        }
    }
}
