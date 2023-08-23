<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Get;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use App\Controller\TotalDonationController;
use App\Repository\DonationRepository;
use ApiPlatform\Doctrine\Orm\Filter\OrderFilter;

#[ORM\Entity(repositoryClass: DonationRepository::class)]
#[ApiResource(
  mercure: [
    "topics" => ["donations"],
  ],
  operations: [
    new GetCollection(
      name: "get_total_donations",
      uriTemplate: "/donations/total",
      controller: TotalDonationController::class,

    ),
    new Get(),
    new GetCollection(),
    new Post()
  ]
)]
#[ApiFilter(OrderFilter::class, properties: ['createdAt', 'count'], arguments: ['orderParameterName' => 'order'])]
class Donation
{
  #[ORM\Id]
  #[ORM\GeneratedValue]
  #[ORM\Column]
  private ?int $id = null;

  #[ORM\Column]
  #[Assert\NotNull]
  public int $count;

  #[ORM\Column]
  #[Assert\NotNull]
  public string $displayName;

  #[ORM\Column]
  #[Assert\NotNull]
  #[Assert\Email]
  public string $email;

  #[ORM\Column(nullable: true)]
  public ?string $mobile = null;

  #[ORM\Column(nullable: true)]
  public ?string $team = null;

  #[ORM\Column(nullable: true)]
  public ?string $message = null;

  #[ORM\Column]
  public bool $anonymous = false;

  #[ORM\Column]
  private \DateTimeImmutable $createdAt;

  public function __construct()
  {
    $this->createdAt = new \DateTimeImmutable();
  }

  public function getId(): ?int
  {
    return $this->id;
  }

  public function getCreatedAt(): \DateTimeImmutable
  {
    return $this->createdAt;
  }
}
