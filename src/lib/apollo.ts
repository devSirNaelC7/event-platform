import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4rfkwqy12n301z356mpgm8q/master',
    cache: new InMemoryCache()
})