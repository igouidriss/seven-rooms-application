package com.sbm.sevenrooms.domain;

import static com.sbm.sevenrooms.domain.ClientTagTestSamples.*;
import static com.sbm.sevenrooms.domain.ClientTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.sbm.sevenrooms.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class ClientTagTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(ClientTag.class);
        ClientTag clientTag1 = getClientTagSample1();
        ClientTag clientTag2 = new ClientTag();
        assertThat(clientTag1).isNotEqualTo(clientTag2);

        clientTag2.setId(clientTag1.getId());
        assertThat(clientTag1).isEqualTo(clientTag2);

        clientTag2 = getClientTagSample2();
        assertThat(clientTag1).isNotEqualTo(clientTag2);
    }

    @Test
    void clientTest() throws Exception {
        ClientTag clientTag = getClientTagRandomSampleGenerator();
        Client clientBack = getClientRandomSampleGenerator();

        clientTag.setClient(clientBack);
        assertThat(clientTag.getClient()).isEqualTo(clientBack);

        clientTag.client(null);
        assertThat(clientTag.getClient()).isNull();
    }
}
