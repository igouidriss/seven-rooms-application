package com.sbm.sevenrooms.domain;

import static com.sbm.sevenrooms.domain.ResTagTestSamples.*;
import static com.sbm.sevenrooms.domain.ReservationTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.sbm.sevenrooms.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class ResTagTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(ResTag.class);
        ResTag resTag1 = getResTagSample1();
        ResTag resTag2 = new ResTag();
        assertThat(resTag1).isNotEqualTo(resTag2);

        resTag2.setId(resTag1.getId());
        assertThat(resTag1).isEqualTo(resTag2);

        resTag2 = getResTagSample2();
        assertThat(resTag1).isNotEqualTo(resTag2);
    }

    @Test
    void reservationTest() throws Exception {
        ResTag resTag = getResTagRandomSampleGenerator();
        Reservation reservationBack = getReservationRandomSampleGenerator();

        resTag.setReservation(reservationBack);
        assertThat(resTag.getReservation()).isEqualTo(reservationBack);

        resTag.reservation(null);
        assertThat(resTag.getReservation()).isNull();
    }
}
