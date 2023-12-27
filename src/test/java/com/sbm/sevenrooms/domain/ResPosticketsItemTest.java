package com.sbm.sevenrooms.domain;

import static com.sbm.sevenrooms.domain.ResPosticketsItemTestSamples.*;
import static com.sbm.sevenrooms.domain.ReservationTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.sbm.sevenrooms.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class ResPosticketsItemTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(ResPosticketsItem.class);
        ResPosticketsItem resPosticketsItem1 = getResPosticketsItemSample1();
        ResPosticketsItem resPosticketsItem2 = new ResPosticketsItem();
        assertThat(resPosticketsItem1).isNotEqualTo(resPosticketsItem2);

        resPosticketsItem2.setId(resPosticketsItem1.getId());
        assertThat(resPosticketsItem1).isEqualTo(resPosticketsItem2);

        resPosticketsItem2 = getResPosticketsItemSample2();
        assertThat(resPosticketsItem1).isNotEqualTo(resPosticketsItem2);
    }

    @Test
    void reservationTest() throws Exception {
        ResPosticketsItem resPosticketsItem = getResPosticketsItemRandomSampleGenerator();
        Reservation reservationBack = getReservationRandomSampleGenerator();

        resPosticketsItem.setReservation(reservationBack);
        assertThat(resPosticketsItem.getReservation()).isEqualTo(reservationBack);

        resPosticketsItem.reservation(null);
        assertThat(resPosticketsItem.getReservation()).isNull();
    }
}
