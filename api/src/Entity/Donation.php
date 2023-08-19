<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\DonationRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: DonationRepository::class)]
#[ApiResource]
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
