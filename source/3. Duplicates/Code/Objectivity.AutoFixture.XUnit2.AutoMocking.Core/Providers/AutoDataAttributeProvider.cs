﻿namespace Objectivity.AutoFixture.XUnit2.AutoMocking.Core.Providers
{
    using Ploeh.AutoFixture;
    using Ploeh.AutoFixture.Xunit2;
    using Xunit.Sdk;

    public class AutoDataAttributeProvider : IAutoFixtureAttributeProvider
    {
        public DataAttribute GetAttribute(IFixture fixture)
        {
            return new AutoDataAttribute(fixture);
        }
    }
}