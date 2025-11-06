
---

## Overview

The **Exam Schedule API** provides endpoints to manage and interact with exam schedules.  
It supports retrieving schedules, filtering and sorting, viewing individual schedules, and updating their statuses.

The API follows RESTful design principles and returns all data in **JSON** format.

---

## Authentication

> No authentication is required for this technical test.  
> In a production version, you would typically secure these routes with API tokens or JWT.

---

## Endpoints Summary

| Method | Endpoint | Description |
|:------:|:----------|:-------------|
| `GET` | `/schedules` | Retrieve all schedules or filter results |
| `GET` | `/schedules/{id}` | Retrieve a single schedule by ID |
| `PUT` | `/schedules/{id}/progress` | Progress the schedule’s status (Pending → Started → Finished) |

---

## 1. `GET /schedules`

### Description
Fetches a list of all exam schedules.  
You can filter and sort using query parameters.

### Optional Query Parameters
| Parameter | Type | Description | Example |
|------------|------|-------------|----------|
| `candidate` | `string` | Filter schedules by candidate name | `candidate=Wilmers` |
| `country` | `string` | Filter by country | `country=Germany` |
| `status` | `string` | Filter by exam status | `status=Started` |
| `dateFrom` | `ISO8601` | Return schedules after this date | `dateFrom=2025-10-01` |
| `dateTo` | `ISO8601` | Return schedules before this date | `dateTo=2025-11-30` |
| `sortBy` | `string` | Sort results by datetime (default `date_asc`) | `sortBy=date_desc` |

---

## 2. `GET /schedules/{id}`

Fetch a single schedule and its associated candidates.

### Example Response
{
"id": 3,
"title": "Certification for Woodworking",
"status": "Pending",
"datetime": "2025-10-07T10:15:00.000000Z",
"language": "German",
"country": "Germany",
"latitude": 52.520008,
"longitude": 13.404954,
"candidates": [{ "id": 8, "name": "Wilmers", "schedule_id": 3 }]
}

---

## 3. `PUT /schedules/{id}/progress`

### Description
Progresses a schedule’s status to its next phase.

### Example Response
{ "success": true, "status": "Started" }

---

## Error Responses

### Example 404 Response
{ "message": "Schedule not found." }

### Example 500 Response
{ "error": "Internal Server Error", "message": "SQLSTATE error..." }

---

## Status Transition Logic
Pending → Started → Finished

---

## Example Workflow
1. GET /api/schedules
2. GET /api/schedules?status=Pending&country;=Germany
3. PUT /api/schedules/3/progress
4. GET /api/schedules/3

---

## Tools for Testing
- Postman
- Insomnia
- curl
- Browser query strings