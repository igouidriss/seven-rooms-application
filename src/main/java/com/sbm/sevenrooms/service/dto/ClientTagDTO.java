package com.sbm.sevenrooms.service.dto;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

/**
 * A DTO for the {@link com.sbm.sevenrooms.domain.ClientTag} entity.
 */
@SuppressWarnings("common-java:DuplicatedBlocks")
public class ClientTagDTO implements Serializable {

    private Long id;

    private String tag;

    private String tagDisplay;

    private String group;

    private String groupDisplay;

    private String color;

    private String techLineage;

    private ZonedDateTime techCreatedDate;

    private ZonedDateTime techUpdatedDate;

    private String techMapping;

    private String techComment;

    private ClientDTO client;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public String getTagDisplay() {
        return tagDisplay;
    }

    public void setTagDisplay(String tagDisplay) {
        this.tagDisplay = tagDisplay;
    }

    public String getGroup() {
        return group;
    }

    public void setGroup(String group) {
        this.group = group;
    }

    public String getGroupDisplay() {
        return groupDisplay;
    }

    public void setGroupDisplay(String groupDisplay) {
        this.groupDisplay = groupDisplay;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getTechLineage() {
        return techLineage;
    }

    public void setTechLineage(String techLineage) {
        this.techLineage = techLineage;
    }

    public ZonedDateTime getTechCreatedDate() {
        return techCreatedDate;
    }

    public void setTechCreatedDate(ZonedDateTime techCreatedDate) {
        this.techCreatedDate = techCreatedDate;
    }

    public ZonedDateTime getTechUpdatedDate() {
        return techUpdatedDate;
    }

    public void setTechUpdatedDate(ZonedDateTime techUpdatedDate) {
        this.techUpdatedDate = techUpdatedDate;
    }

    public String getTechMapping() {
        return techMapping;
    }

    public void setTechMapping(String techMapping) {
        this.techMapping = techMapping;
    }

    public String getTechComment() {
        return techComment;
    }

    public void setTechComment(String techComment) {
        this.techComment = techComment;
    }

    public ClientDTO getClient() {
        return client;
    }

    public void setClient(ClientDTO client) {
        this.client = client;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof ClientTagDTO)) {
            return false;
        }

        ClientTagDTO clientTagDTO = (ClientTagDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, clientTagDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "ClientTagDTO{" +
            "id=" + getId() +
            ", tag='" + getTag() + "'" +
            ", tagDisplay='" + getTagDisplay() + "'" +
            ", group='" + getGroup() + "'" +
            ", groupDisplay='" + getGroupDisplay() + "'" +
            ", color='" + getColor() + "'" +
            ", techLineage='" + getTechLineage() + "'" +
            ", techCreatedDate='" + getTechCreatedDate() + "'" +
            ", techUpdatedDate='" + getTechUpdatedDate() + "'" +
            ", techMapping='" + getTechMapping() + "'" +
            ", techComment='" + getTechComment() + "'" +
            ", client=" + getClient() +
            "}";
    }
}
