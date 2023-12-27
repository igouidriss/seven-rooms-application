package com.sbm.sevenrooms.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.Set;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Reservation.
 */
@Entity
@Table(name = "reservation")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Reservation implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @Column(name = "resv_id")
    private String resvId;

    @Column(name = "created")
    private String created;

    @Column(name = "updated")
    private String updated;

    @Column(name = "deleted")
    private String deleted;

    @Column(name = "venue_group_client_id")
    private String venueGroupClientId;

    @Column(name = "venue_group_id")
    private String venueGroupId;

    @Column(name = "venue_id")
    private String venueId;

    @Column(name = "jhi_date")
    private String date;

    @Column(name = "duration")
    private Integer duration;

    @Column(name = "check_numbers")
    private String checkNumbers;

    @Column(name = "shift_category")
    private String shiftCategory;

    @Column(name = "shift_persistent_id")
    private String shiftPersistentId;

    @Column(name = "max_guests")
    private Integer maxGuests;

    @Column(name = "mfratio_male")
    private Integer mfratioMale;

    @Column(name = "mfratio_female")
    private Integer mfratioFemale;

    @Column(name = "status")
    private String status;

    @Column(name = "status_display")
    private String statusDisplay;

    @Column(name = "status_simple")
    private String statusSimple;

    @Column(name = "table_numbers")
    private String tableNumbers;

    @Column(name = "access_persistent_id")
    private String accessPersistentId;

    @Column(name = "arrived_guests")
    private Integer arrivedGuests;

    @Column(name = "isvip")
    private Boolean isvip;

    @Column(name = "bookedby")
    private String bookedby;

    @Column(name = "client_reference_code")
    private String clientReferenceCode;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "email")
    private String email;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "address")
    private String address;

    @Column(name = "address_2")
    private String address2;

    @Column(name = "city")
    private String city;

    @Column(name = "postal_code")
    private String postalCode;

    @Column(name = "state")
    private String state;

    @Column(name = "country")
    private String country;

    @Column(name = "loyalty_id")
    private String loyaltyId;

    @Column(name = "loyalty_rank")
    private Integer loyaltyRank;

    @Column(name = "loyalty_tier")
    private String loyaltyTier;

    @Column(name = "notes")
    private String notes;

    @Column(name = "arrival_time")
    private String arrivalTime;

    @Column(name = "seated_time")
    private String seatedTime;

    @Column(name = "left_time")
    private String leftTime;

    @Column(name = "client_requests")
    private String clientRequests;

    @Column(name = "comps")
    private Integer comps;

    @Column(name = "comps_price_type")
    private String compsPriceType;

    @Column(name = "cost_option")
    private Integer costOption;

    @Column(name = "policy")
    private String policy;

    @Column(name = "min_price")
    private Integer minPrice;

    @Column(name = "pre_payment")
    private Double prePayment;

    @Column(name = "onsite_payment")
    private Double onsitePayment;

    @Column(name = "total_payment")
    private Integer totalPayment;

    @Column(name = "paid_by")
    private String paidBy;

    @Column(name = "served_by")
    private String servedBy;

    @Column(name = "rating")
    private Integer rating;

    @Column(name = "problems")
    private String problems;

    @Column(name = "auto_assignments")
    private String autoAssignments;

    @Column(name = "external_client_id")
    private String externalClientId;

    @Column(name = "external_id")
    private String externalId;

    @Column(name = "external_reference_code")
    private String externalReferenceCode;

    @Column(name = "external_user_id")
    private String externalUserId;

    @Column(name = "modify_reservation_link")
    private String modifyReservationLink;

    @Column(name = "reference_code")
    private String referenceCode;

    @Column(name = "reservation_sms_optin")
    private Boolean reservationSmsOptin;

    @Column(name = "reservation_type")
    private String reservationType;

    @Column(name = "send_reminder_email")
    private Boolean sendReminderEmail;

    @Column(name = "sendreminder_sms")
    private Boolean sendreminderSms;

    @Column(name = "source_client_id")
    private String sourceClientId;

    @Column(name = "user_id")
    private String userId;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "tech_lineage")
    private String techLineage;

    @Column(name = "tech_created_date")
    private ZonedDateTime techCreatedDate;

    @Column(name = "tech_updated_date")
    private ZonedDateTime techUpdatedDate;

    @Column(name = "tech_mapping")
    private String techMapping;

    @Column(name = "tech_comment")
    private String techComment;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "reservation")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JsonIgnoreProperties(value = { "reservation" }, allowSetters = true)
    private Set<ResTag> resTags = new HashSet<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "reservation")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JsonIgnoreProperties(value = { "reservation" }, allowSetters = true)
    private Set<ResPosticketsItem> resPosticketsItems = new HashSet<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "reservation")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JsonIgnoreProperties(value = { "reservation" }, allowSetters = true)
    private Set<ResPosTicket> resPosTickets = new HashSet<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "reservation")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JsonIgnoreProperties(value = { "reservation" }, allowSetters = true)
    private Set<ResCustomField> resCustomFields = new HashSet<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties(
        value = { "clientPhoto", "clientVenueStats", "customFields", "clientTags", "reservations", "memberGroups" },
        allowSetters = true
    )
    private Client client;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Reservation id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getResvId() {
        return this.resvId;
    }

    public Reservation resvId(String resvId) {
        this.setResvId(resvId);
        return this;
    }

    public void setResvId(String resvId) {
        this.resvId = resvId;
    }

    public String getCreated() {
        return this.created;
    }

    public Reservation created(String created) {
        this.setCreated(created);
        return this;
    }

    public void setCreated(String created) {
        this.created = created;
    }

    public String getUpdated() {
        return this.updated;
    }

    public Reservation updated(String updated) {
        this.setUpdated(updated);
        return this;
    }

    public void setUpdated(String updated) {
        this.updated = updated;
    }

    public String getDeleted() {
        return this.deleted;
    }

    public Reservation deleted(String deleted) {
        this.setDeleted(deleted);
        return this;
    }

    public void setDeleted(String deleted) {
        this.deleted = deleted;
    }

    public String getVenueGroupClientId() {
        return this.venueGroupClientId;
    }

    public Reservation venueGroupClientId(String venueGroupClientId) {
        this.setVenueGroupClientId(venueGroupClientId);
        return this;
    }

    public void setVenueGroupClientId(String venueGroupClientId) {
        this.venueGroupClientId = venueGroupClientId;
    }

    public String getVenueGroupId() {
        return this.venueGroupId;
    }

    public Reservation venueGroupId(String venueGroupId) {
        this.setVenueGroupId(venueGroupId);
        return this;
    }

    public void setVenueGroupId(String venueGroupId) {
        this.venueGroupId = venueGroupId;
    }

    public String getVenueId() {
        return this.venueId;
    }

    public Reservation venueId(String venueId) {
        this.setVenueId(venueId);
        return this;
    }

    public void setVenueId(String venueId) {
        this.venueId = venueId;
    }

    public String getDate() {
        return this.date;
    }

    public Reservation date(String date) {
        this.setDate(date);
        return this;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Integer getDuration() {
        return this.duration;
    }

    public Reservation duration(Integer duration) {
        this.setDuration(duration);
        return this;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public String getCheckNumbers() {
        return this.checkNumbers;
    }

    public Reservation checkNumbers(String checkNumbers) {
        this.setCheckNumbers(checkNumbers);
        return this;
    }

    public void setCheckNumbers(String checkNumbers) {
        this.checkNumbers = checkNumbers;
    }

    public String getShiftCategory() {
        return this.shiftCategory;
    }

    public Reservation shiftCategory(String shiftCategory) {
        this.setShiftCategory(shiftCategory);
        return this;
    }

    public void setShiftCategory(String shiftCategory) {
        this.shiftCategory = shiftCategory;
    }

    public String getShiftPersistentId() {
        return this.shiftPersistentId;
    }

    public Reservation shiftPersistentId(String shiftPersistentId) {
        this.setShiftPersistentId(shiftPersistentId);
        return this;
    }

    public void setShiftPersistentId(String shiftPersistentId) {
        this.shiftPersistentId = shiftPersistentId;
    }

    public Integer getMaxGuests() {
        return this.maxGuests;
    }

    public Reservation maxGuests(Integer maxGuests) {
        this.setMaxGuests(maxGuests);
        return this;
    }

    public void setMaxGuests(Integer maxGuests) {
        this.maxGuests = maxGuests;
    }

    public Integer getMfratioMale() {
        return this.mfratioMale;
    }

    public Reservation mfratioMale(Integer mfratioMale) {
        this.setMfratioMale(mfratioMale);
        return this;
    }

    public void setMfratioMale(Integer mfratioMale) {
        this.mfratioMale = mfratioMale;
    }

    public Integer getMfratioFemale() {
        return this.mfratioFemale;
    }

    public Reservation mfratioFemale(Integer mfratioFemale) {
        this.setMfratioFemale(mfratioFemale);
        return this;
    }

    public void setMfratioFemale(Integer mfratioFemale) {
        this.mfratioFemale = mfratioFemale;
    }

    public String getStatus() {
        return this.status;
    }

    public Reservation status(String status) {
        this.setStatus(status);
        return this;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getStatusDisplay() {
        return this.statusDisplay;
    }

    public Reservation statusDisplay(String statusDisplay) {
        this.setStatusDisplay(statusDisplay);
        return this;
    }

    public void setStatusDisplay(String statusDisplay) {
        this.statusDisplay = statusDisplay;
    }

    public String getStatusSimple() {
        return this.statusSimple;
    }

    public Reservation statusSimple(String statusSimple) {
        this.setStatusSimple(statusSimple);
        return this;
    }

    public void setStatusSimple(String statusSimple) {
        this.statusSimple = statusSimple;
    }

    public String getTableNumbers() {
        return this.tableNumbers;
    }

    public Reservation tableNumbers(String tableNumbers) {
        this.setTableNumbers(tableNumbers);
        return this;
    }

    public void setTableNumbers(String tableNumbers) {
        this.tableNumbers = tableNumbers;
    }

    public String getAccessPersistentId() {
        return this.accessPersistentId;
    }

    public Reservation accessPersistentId(String accessPersistentId) {
        this.setAccessPersistentId(accessPersistentId);
        return this;
    }

    public void setAccessPersistentId(String accessPersistentId) {
        this.accessPersistentId = accessPersistentId;
    }

    public Integer getArrivedGuests() {
        return this.arrivedGuests;
    }

    public Reservation arrivedGuests(Integer arrivedGuests) {
        this.setArrivedGuests(arrivedGuests);
        return this;
    }

    public void setArrivedGuests(Integer arrivedGuests) {
        this.arrivedGuests = arrivedGuests;
    }

    public Boolean getIsvip() {
        return this.isvip;
    }

    public Reservation isvip(Boolean isvip) {
        this.setIsvip(isvip);
        return this;
    }

    public void setIsvip(Boolean isvip) {
        this.isvip = isvip;
    }

    public String getBookedby() {
        return this.bookedby;
    }

    public Reservation bookedby(String bookedby) {
        this.setBookedby(bookedby);
        return this;
    }

    public void setBookedby(String bookedby) {
        this.bookedby = bookedby;
    }

    public String getClientReferenceCode() {
        return this.clientReferenceCode;
    }

    public Reservation clientReferenceCode(String clientReferenceCode) {
        this.setClientReferenceCode(clientReferenceCode);
        return this;
    }

    public void setClientReferenceCode(String clientReferenceCode) {
        this.clientReferenceCode = clientReferenceCode;
    }

    public String getLastname() {
        return this.lastname;
    }

    public Reservation lastname(String lastname) {
        this.setLastname(lastname);
        return this;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getFirstname() {
        return this.firstname;
    }

    public Reservation firstname(String firstname) {
        this.setFirstname(firstname);
        return this;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getEmail() {
        return this.email;
    }

    public Reservation email(String email) {
        this.setEmail(email);
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return this.phoneNumber;
    }

    public Reservation phoneNumber(String phoneNumber) {
        this.setPhoneNumber(phoneNumber);
        return this;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return this.address;
    }

    public Reservation address(String address) {
        this.setAddress(address);
        return this;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAddress2() {
        return this.address2;
    }

    public Reservation address2(String address2) {
        this.setAddress2(address2);
        return this;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getCity() {
        return this.city;
    }

    public Reservation city(String city) {
        this.setCity(city);
        return this;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPostalCode() {
        return this.postalCode;
    }

    public Reservation postalCode(String postalCode) {
        this.setPostalCode(postalCode);
        return this;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getState() {
        return this.state;
    }

    public Reservation state(String state) {
        this.setState(state);
        return this;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCountry() {
        return this.country;
    }

    public Reservation country(String country) {
        this.setCountry(country);
        return this;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getLoyaltyId() {
        return this.loyaltyId;
    }

    public Reservation loyaltyId(String loyaltyId) {
        this.setLoyaltyId(loyaltyId);
        return this;
    }

    public void setLoyaltyId(String loyaltyId) {
        this.loyaltyId = loyaltyId;
    }

    public Integer getLoyaltyRank() {
        return this.loyaltyRank;
    }

    public Reservation loyaltyRank(Integer loyaltyRank) {
        this.setLoyaltyRank(loyaltyRank);
        return this;
    }

    public void setLoyaltyRank(Integer loyaltyRank) {
        this.loyaltyRank = loyaltyRank;
    }

    public String getLoyaltyTier() {
        return this.loyaltyTier;
    }

    public Reservation loyaltyTier(String loyaltyTier) {
        this.setLoyaltyTier(loyaltyTier);
        return this;
    }

    public void setLoyaltyTier(String loyaltyTier) {
        this.loyaltyTier = loyaltyTier;
    }

    public String getNotes() {
        return this.notes;
    }

    public Reservation notes(String notes) {
        this.setNotes(notes);
        return this;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getArrivalTime() {
        return this.arrivalTime;
    }

    public Reservation arrivalTime(String arrivalTime) {
        this.setArrivalTime(arrivalTime);
        return this;
    }

    public void setArrivalTime(String arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public String getSeatedTime() {
        return this.seatedTime;
    }

    public Reservation seatedTime(String seatedTime) {
        this.setSeatedTime(seatedTime);
        return this;
    }

    public void setSeatedTime(String seatedTime) {
        this.seatedTime = seatedTime;
    }

    public String getLeftTime() {
        return this.leftTime;
    }

    public Reservation leftTime(String leftTime) {
        this.setLeftTime(leftTime);
        return this;
    }

    public void setLeftTime(String leftTime) {
        this.leftTime = leftTime;
    }

    public String getClientRequests() {
        return this.clientRequests;
    }

    public Reservation clientRequests(String clientRequests) {
        this.setClientRequests(clientRequests);
        return this;
    }

    public void setClientRequests(String clientRequests) {
        this.clientRequests = clientRequests;
    }

    public Integer getComps() {
        return this.comps;
    }

    public Reservation comps(Integer comps) {
        this.setComps(comps);
        return this;
    }

    public void setComps(Integer comps) {
        this.comps = comps;
    }

    public String getCompsPriceType() {
        return this.compsPriceType;
    }

    public Reservation compsPriceType(String compsPriceType) {
        this.setCompsPriceType(compsPriceType);
        return this;
    }

    public void setCompsPriceType(String compsPriceType) {
        this.compsPriceType = compsPriceType;
    }

    public Integer getCostOption() {
        return this.costOption;
    }

    public Reservation costOption(Integer costOption) {
        this.setCostOption(costOption);
        return this;
    }

    public void setCostOption(Integer costOption) {
        this.costOption = costOption;
    }

    public String getPolicy() {
        return this.policy;
    }

    public Reservation policy(String policy) {
        this.setPolicy(policy);
        return this;
    }

    public void setPolicy(String policy) {
        this.policy = policy;
    }

    public Integer getMinPrice() {
        return this.minPrice;
    }

    public Reservation minPrice(Integer minPrice) {
        this.setMinPrice(minPrice);
        return this;
    }

    public void setMinPrice(Integer minPrice) {
        this.minPrice = minPrice;
    }

    public Double getPrePayment() {
        return this.prePayment;
    }

    public Reservation prePayment(Double prePayment) {
        this.setPrePayment(prePayment);
        return this;
    }

    public void setPrePayment(Double prePayment) {
        this.prePayment = prePayment;
    }

    public Double getOnsitePayment() {
        return this.onsitePayment;
    }

    public Reservation onsitePayment(Double onsitePayment) {
        this.setOnsitePayment(onsitePayment);
        return this;
    }

    public void setOnsitePayment(Double onsitePayment) {
        this.onsitePayment = onsitePayment;
    }

    public Integer getTotalPayment() {
        return this.totalPayment;
    }

    public Reservation totalPayment(Integer totalPayment) {
        this.setTotalPayment(totalPayment);
        return this;
    }

    public void setTotalPayment(Integer totalPayment) {
        this.totalPayment = totalPayment;
    }

    public String getPaidBy() {
        return this.paidBy;
    }

    public Reservation paidBy(String paidBy) {
        this.setPaidBy(paidBy);
        return this;
    }

    public void setPaidBy(String paidBy) {
        this.paidBy = paidBy;
    }

    public String getServedBy() {
        return this.servedBy;
    }

    public Reservation servedBy(String servedBy) {
        this.setServedBy(servedBy);
        return this;
    }

    public void setServedBy(String servedBy) {
        this.servedBy = servedBy;
    }

    public Integer getRating() {
        return this.rating;
    }

    public Reservation rating(Integer rating) {
        this.setRating(rating);
        return this;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getProblems() {
        return this.problems;
    }

    public Reservation problems(String problems) {
        this.setProblems(problems);
        return this;
    }

    public void setProblems(String problems) {
        this.problems = problems;
    }

    public String getAutoAssignments() {
        return this.autoAssignments;
    }

    public Reservation autoAssignments(String autoAssignments) {
        this.setAutoAssignments(autoAssignments);
        return this;
    }

    public void setAutoAssignments(String autoAssignments) {
        this.autoAssignments = autoAssignments;
    }

    public String getExternalClientId() {
        return this.externalClientId;
    }

    public Reservation externalClientId(String externalClientId) {
        this.setExternalClientId(externalClientId);
        return this;
    }

    public void setExternalClientId(String externalClientId) {
        this.externalClientId = externalClientId;
    }

    public String getExternalId() {
        return this.externalId;
    }

    public Reservation externalId(String externalId) {
        this.setExternalId(externalId);
        return this;
    }

    public void setExternalId(String externalId) {
        this.externalId = externalId;
    }

    public String getExternalReferenceCode() {
        return this.externalReferenceCode;
    }

    public Reservation externalReferenceCode(String externalReferenceCode) {
        this.setExternalReferenceCode(externalReferenceCode);
        return this;
    }

    public void setExternalReferenceCode(String externalReferenceCode) {
        this.externalReferenceCode = externalReferenceCode;
    }

    public String getExternalUserId() {
        return this.externalUserId;
    }

    public Reservation externalUserId(String externalUserId) {
        this.setExternalUserId(externalUserId);
        return this;
    }

    public void setExternalUserId(String externalUserId) {
        this.externalUserId = externalUserId;
    }

    public String getModifyReservationLink() {
        return this.modifyReservationLink;
    }

    public Reservation modifyReservationLink(String modifyReservationLink) {
        this.setModifyReservationLink(modifyReservationLink);
        return this;
    }

    public void setModifyReservationLink(String modifyReservationLink) {
        this.modifyReservationLink = modifyReservationLink;
    }

    public String getReferenceCode() {
        return this.referenceCode;
    }

    public Reservation referenceCode(String referenceCode) {
        this.setReferenceCode(referenceCode);
        return this;
    }

    public void setReferenceCode(String referenceCode) {
        this.referenceCode = referenceCode;
    }

    public Boolean getReservationSmsOptin() {
        return this.reservationSmsOptin;
    }

    public Reservation reservationSmsOptin(Boolean reservationSmsOptin) {
        this.setReservationSmsOptin(reservationSmsOptin);
        return this;
    }

    public void setReservationSmsOptin(Boolean reservationSmsOptin) {
        this.reservationSmsOptin = reservationSmsOptin;
    }

    public String getReservationType() {
        return this.reservationType;
    }

    public Reservation reservationType(String reservationType) {
        this.setReservationType(reservationType);
        return this;
    }

    public void setReservationType(String reservationType) {
        this.reservationType = reservationType;
    }

    public Boolean getSendReminderEmail() {
        return this.sendReminderEmail;
    }

    public Reservation sendReminderEmail(Boolean sendReminderEmail) {
        this.setSendReminderEmail(sendReminderEmail);
        return this;
    }

    public void setSendReminderEmail(Boolean sendReminderEmail) {
        this.sendReminderEmail = sendReminderEmail;
    }

    public Boolean getSendreminderSms() {
        return this.sendreminderSms;
    }

    public Reservation sendreminderSms(Boolean sendreminderSms) {
        this.setSendreminderSms(sendreminderSms);
        return this;
    }

    public void setSendreminderSms(Boolean sendreminderSms) {
        this.sendreminderSms = sendreminderSms;
    }

    public String getSourceClientId() {
        return this.sourceClientId;
    }

    public Reservation sourceClientId(String sourceClientId) {
        this.setSourceClientId(sourceClientId);
        return this;
    }

    public void setSourceClientId(String sourceClientId) {
        this.sourceClientId = sourceClientId;
    }

    public String getUserId() {
        return this.userId;
    }

    public Reservation userId(String userId) {
        this.setUserId(userId);
        return this;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return this.userName;
    }

    public Reservation userName(String userName) {
        this.setUserName(userName);
        return this;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getTechLineage() {
        return this.techLineage;
    }

    public Reservation techLineage(String techLineage) {
        this.setTechLineage(techLineage);
        return this;
    }

    public void setTechLineage(String techLineage) {
        this.techLineage = techLineage;
    }

    public ZonedDateTime getTechCreatedDate() {
        return this.techCreatedDate;
    }

    public Reservation techCreatedDate(ZonedDateTime techCreatedDate) {
        this.setTechCreatedDate(techCreatedDate);
        return this;
    }

    public void setTechCreatedDate(ZonedDateTime techCreatedDate) {
        this.techCreatedDate = techCreatedDate;
    }

    public ZonedDateTime getTechUpdatedDate() {
        return this.techUpdatedDate;
    }

    public Reservation techUpdatedDate(ZonedDateTime techUpdatedDate) {
        this.setTechUpdatedDate(techUpdatedDate);
        return this;
    }

    public void setTechUpdatedDate(ZonedDateTime techUpdatedDate) {
        this.techUpdatedDate = techUpdatedDate;
    }

    public String getTechMapping() {
        return this.techMapping;
    }

    public Reservation techMapping(String techMapping) {
        this.setTechMapping(techMapping);
        return this;
    }

    public void setTechMapping(String techMapping) {
        this.techMapping = techMapping;
    }

    public String getTechComment() {
        return this.techComment;
    }

    public Reservation techComment(String techComment) {
        this.setTechComment(techComment);
        return this;
    }

    public void setTechComment(String techComment) {
        this.techComment = techComment;
    }

    public Set<ResTag> getResTags() {
        return this.resTags;
    }

    public void setResTags(Set<ResTag> resTags) {
        if (this.resTags != null) {
            this.resTags.forEach(i -> i.setReservation(null));
        }
        if (resTags != null) {
            resTags.forEach(i -> i.setReservation(this));
        }
        this.resTags = resTags;
    }

    public Reservation resTags(Set<ResTag> resTags) {
        this.setResTags(resTags);
        return this;
    }

    public Reservation addResTag(ResTag resTag) {
        this.resTags.add(resTag);
        resTag.setReservation(this);
        return this;
    }

    public Reservation removeResTag(ResTag resTag) {
        this.resTags.remove(resTag);
        resTag.setReservation(null);
        return this;
    }

    public Set<ResPosticketsItem> getResPosticketsItems() {
        return this.resPosticketsItems;
    }

    public void setResPosticketsItems(Set<ResPosticketsItem> resPosticketsItems) {
        if (this.resPosticketsItems != null) {
            this.resPosticketsItems.forEach(i -> i.setReservation(null));
        }
        if (resPosticketsItems != null) {
            resPosticketsItems.forEach(i -> i.setReservation(this));
        }
        this.resPosticketsItems = resPosticketsItems;
    }

    public Reservation resPosticketsItems(Set<ResPosticketsItem> resPosticketsItems) {
        this.setResPosticketsItems(resPosticketsItems);
        return this;
    }

    public Reservation addResPosticketsItem(ResPosticketsItem resPosticketsItem) {
        this.resPosticketsItems.add(resPosticketsItem);
        resPosticketsItem.setReservation(this);
        return this;
    }

    public Reservation removeResPosticketsItem(ResPosticketsItem resPosticketsItem) {
        this.resPosticketsItems.remove(resPosticketsItem);
        resPosticketsItem.setReservation(null);
        return this;
    }

    public Set<ResPosTicket> getResPosTickets() {
        return this.resPosTickets;
    }

    public void setResPosTickets(Set<ResPosTicket> resPosTickets) {
        if (this.resPosTickets != null) {
            this.resPosTickets.forEach(i -> i.setReservation(null));
        }
        if (resPosTickets != null) {
            resPosTickets.forEach(i -> i.setReservation(this));
        }
        this.resPosTickets = resPosTickets;
    }

    public Reservation resPosTickets(Set<ResPosTicket> resPosTickets) {
        this.setResPosTickets(resPosTickets);
        return this;
    }

    public Reservation addResPosTicket(ResPosTicket resPosTicket) {
        this.resPosTickets.add(resPosTicket);
        resPosTicket.setReservation(this);
        return this;
    }

    public Reservation removeResPosTicket(ResPosTicket resPosTicket) {
        this.resPosTickets.remove(resPosTicket);
        resPosTicket.setReservation(null);
        return this;
    }

    public Set<ResCustomField> getResCustomFields() {
        return this.resCustomFields;
    }

    public void setResCustomFields(Set<ResCustomField> resCustomFields) {
        if (this.resCustomFields != null) {
            this.resCustomFields.forEach(i -> i.setReservation(null));
        }
        if (resCustomFields != null) {
            resCustomFields.forEach(i -> i.setReservation(this));
        }
        this.resCustomFields = resCustomFields;
    }

    public Reservation resCustomFields(Set<ResCustomField> resCustomFields) {
        this.setResCustomFields(resCustomFields);
        return this;
    }

    public Reservation addResCustomField(ResCustomField resCustomField) {
        this.resCustomFields.add(resCustomField);
        resCustomField.setReservation(this);
        return this;
    }

    public Reservation removeResCustomField(ResCustomField resCustomField) {
        this.resCustomFields.remove(resCustomField);
        resCustomField.setReservation(null);
        return this;
    }

    public Client getClient() {
        return this.client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Reservation client(Client client) {
        this.setClient(client);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Reservation)) {
            return false;
        }
        return getId() != null && getId().equals(((Reservation) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Reservation{" +
            "id=" + getId() +
            ", resvId='" + getResvId() + "'" +
            ", created='" + getCreated() + "'" +
            ", updated='" + getUpdated() + "'" +
            ", deleted='" + getDeleted() + "'" +
            ", venueGroupClientId='" + getVenueGroupClientId() + "'" +
            ", venueGroupId='" + getVenueGroupId() + "'" +
            ", venueId='" + getVenueId() + "'" +
            ", date='" + getDate() + "'" +
            ", duration=" + getDuration() +
            ", checkNumbers='" + getCheckNumbers() + "'" +
            ", shiftCategory='" + getShiftCategory() + "'" +
            ", shiftPersistentId='" + getShiftPersistentId() + "'" +
            ", maxGuests=" + getMaxGuests() +
            ", mfratioMale=" + getMfratioMale() +
            ", mfratioFemale=" + getMfratioFemale() +
            ", status='" + getStatus() + "'" +
            ", statusDisplay='" + getStatusDisplay() + "'" +
            ", statusSimple='" + getStatusSimple() + "'" +
            ", tableNumbers='" + getTableNumbers() + "'" +
            ", accessPersistentId='" + getAccessPersistentId() + "'" +
            ", arrivedGuests=" + getArrivedGuests() +
            ", isvip='" + getIsvip() + "'" +
            ", bookedby='" + getBookedby() + "'" +
            ", clientReferenceCode='" + getClientReferenceCode() + "'" +
            ", lastname='" + getLastname() + "'" +
            ", firstname='" + getFirstname() + "'" +
            ", email='" + getEmail() + "'" +
            ", phoneNumber='" + getPhoneNumber() + "'" +
            ", address='" + getAddress() + "'" +
            ", address2='" + getAddress2() + "'" +
            ", city='" + getCity() + "'" +
            ", postalCode='" + getPostalCode() + "'" +
            ", state='" + getState() + "'" +
            ", country='" + getCountry() + "'" +
            ", loyaltyId='" + getLoyaltyId() + "'" +
            ", loyaltyRank=" + getLoyaltyRank() +
            ", loyaltyTier='" + getLoyaltyTier() + "'" +
            ", notes='" + getNotes() + "'" +
            ", arrivalTime='" + getArrivalTime() + "'" +
            ", seatedTime='" + getSeatedTime() + "'" +
            ", leftTime='" + getLeftTime() + "'" +
            ", clientRequests='" + getClientRequests() + "'" +
            ", comps=" + getComps() +
            ", compsPriceType='" + getCompsPriceType() + "'" +
            ", costOption=" + getCostOption() +
            ", policy='" + getPolicy() + "'" +
            ", minPrice=" + getMinPrice() +
            ", prePayment=" + getPrePayment() +
            ", onsitePayment=" + getOnsitePayment() +
            ", totalPayment=" + getTotalPayment() +
            ", paidBy='" + getPaidBy() + "'" +
            ", servedBy='" + getServedBy() + "'" +
            ", rating=" + getRating() +
            ", problems='" + getProblems() + "'" +
            ", autoAssignments='" + getAutoAssignments() + "'" +
            ", externalClientId='" + getExternalClientId() + "'" +
            ", externalId='" + getExternalId() + "'" +
            ", externalReferenceCode='" + getExternalReferenceCode() + "'" +
            ", externalUserId='" + getExternalUserId() + "'" +
            ", modifyReservationLink='" + getModifyReservationLink() + "'" +
            ", referenceCode='" + getReferenceCode() + "'" +
            ", reservationSmsOptin='" + getReservationSmsOptin() + "'" +
            ", reservationType='" + getReservationType() + "'" +
            ", sendReminderEmail='" + getSendReminderEmail() + "'" +
            ", sendreminderSms='" + getSendreminderSms() + "'" +
            ", sourceClientId='" + getSourceClientId() + "'" +
            ", userId='" + getUserId() + "'" +
            ", userName='" + getUserName() + "'" +
            ", techLineage='" + getTechLineage() + "'" +
            ", techCreatedDate='" + getTechCreatedDate() + "'" +
            ", techUpdatedDate='" + getTechUpdatedDate() + "'" +
            ", techMapping='" + getTechMapping() + "'" +
            ", techComment='" + getTechComment() + "'" +
            "}";
    }
}
